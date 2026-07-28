/**
 * Parse HTML from Twine into JSON for use in this app.
 */

const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const inputDir = "./twineHTML";
const outputDir = "../src/data/raw-cases";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const filenames = fs.readdirSync(inputDir);

(async () => {
  for (const filename of filenames) {
    if (!filename.endsWith(".html")) continue;

    const filepath = path.join(inputDir, filename);
    let fileContent = fs.readFileSync(filepath, "utf-8");

    // Extract content between first and last tw-storydata tags
    const match = fileContent.match(/<tw-storydata[^]*<\/tw-storydata>/);
    if (!match) continue;

    const storyContent = match[0];
    const htmlDecoded = storyContent
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");

    const dom = new JSDOM(htmlDecoded);
    const document = dom.window.document;

    // Create a mapping of passage names to their pids. Links in the Twine source
    // don't always punctuate the target name the same way the passage does
    // (e.g. "Walk & Hitch-Hike 2" linking to "Walk & Hitch Hike 2"), so keep a
    // second index keyed on a normalized name to fall back on.
    const nameToPidMapping = {};
    const normalizedNameToPidMapping = {};
    const normalizeName = (name) =>
      name.toLowerCase().replace(/[^a-z0-9]/g, "");

    Array.from(document.querySelectorAll("tw-passagedata")).forEach(
      (passage) => {
        const pid = passage.getAttribute("pid");
        const name = passage.getAttribute("name");
        nameToPidMapping[name] = pid;
        normalizedNameToPidMapping[normalizeName(name)] = pid;
      },
    );

    /** Resolve a link target to a pid, warning when it matches no passage. */
    const resolvePid = (name) => {
      if (name === undefined) return undefined;
      const pid =
        nameToPidMapping[name] ?? normalizedNameToPidMapping[normalizeName(name)];
      if (pid === undefined) {
        console.warn(
          `[${filename}] link target "${name}" matches no passage; pid left empty`,
        );
      }
      return pid;
    };

    const passages = Array.from(
      document.querySelectorAll("tw-passagedata"),
    ).map((passage) => {
      const pid = passage.getAttribute("pid");
      const name = passage.getAttribute("name");

      // Extract image links and remove <img> tags
      const images = Array.from(passage.querySelectorAll("img")).map((img) =>
        img.getAttribute("src"),
      );

      // Remove <style> tags and its content
      Array.from(passage.querySelectorAll("style")).forEach((style) => {
        style.remove();
      });

      // Extract click-goto links
      let clickGoto = null;
      const clickGotoMatch = passage.textContent.match(
        /\(click-goto:.*?,"(.*?)"\)/,
      );
      if (clickGotoMatch) {
        clickGoto = {
          name: clickGotoMatch[1],
          pid: resolvePid(clickGotoMatch[1]),
        };
        passage.textContent = passage.textContent
          .replace(clickGotoMatch[0], "")
          .trim();
      }

      // Get the cleaned text content
      let content = passage.textContent.trim();

      // parse italics
      content = content.replace(/\/\/(.*?)\/\//g, "<i>$1</i>");

      // Extract decision content before splitting paragraphs
      const decisions = [];
      const decisionsRaw = content.match(/\[\[.*?\]\]/g) || [];
      decisionsRaw.forEach((decisionRaw) => {
        const decisionContent = decisionRaw.slice(2, -2);
        const [text, decisionName] = decisionContent
          .split("->")
          .map((s) => s.trim());
        decisions.push({
          text: text,
          name: decisionName,
          pid: resolvePid(decisionName),
        });
        content = content.replace(decisionRaw, "").trim();
      });

      // Split paragraphs on newlines. Decisions are usually authored as a Twine
      // bullet list ("* [[Stay->...]]"), so removing the link above leaves the
      // bare list marker behind — drop any line that is only markers.
      const paragraphs = content
        .split("\n")
        .map((p) => p.trim())
        .filter((p) => p && !/^[*\-•\s]+$/.test(p));

      return {
        id: pid,
        name: name,
        paragraphs: paragraphs,
        decisions: decisions,
        images: images,
        next: clickGoto,
      };
    });

    // Now, write the output
    const outputPath = path.join(outputDir, filename.replace(".html", ".json"));
    fs.writeFileSync(outputPath, JSON.stringify(passages, null, 4));
  }
})();
