/**
 * Parse HTML from Twine into JSON for use in this app.
 * Big shout to ChatGPT for writing the bulk of this code.
 */

const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const inputDir = "./twineHTML";
const outputDir = "../src/data"; // Replace with your desired output directory

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// List all files in the input directory
fs.readdirSync(inputDir).forEach((filename) => {
  if (!filename.endsWith(".html")) return; // Skip non-html files

  const filepath = path.join(inputDir, filename);
  let fileContent = fs.readFileSync(filepath, "utf-8");

  // Extract content between first and last tw-storydata tags
  const match = fileContent.match(/<tw-storydata[^]*<\/tw-storydata>/);
  if (!match) return;

  const storyContent = match[0];
  const htmlDecoded = storyContent.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

  const dom = new JSDOM(htmlDecoded);
  const document = dom.window.document;

  // Create a mapping of passage names to their pids
  const nameToPidMapping = {};
  Array.from(document.querySelectorAll("tw-passagedata")).forEach((passage) => {
    const pid = passage.getAttribute("pid");
    const name = passage.getAttribute("name");
    nameToPidMapping[name] = pid;
  });

  const passages = Array.from(document.querySelectorAll("tw-passagedata")).map(
    (passage) => {
      const pid = passage.getAttribute("pid");
      const name = passage.getAttribute("name");

      // Extract image links and remove <img> tags
      const images = [];
      Array.from(passage.querySelectorAll("img")).forEach((img) => {
        images.push(img.getAttribute("src"));
        img.remove();
      });

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
          pid: nameToPidMapping[clickGotoMatch[1]],
        };
        passage.textContent = passage.textContent
          .replace(clickGotoMatch[0], "")
          .trim();
      }

      // Now, get the cleaned text content
      let content = passage.textContent.trim();

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
          pid: nameToPidMapping[decisionName],
        });
        content = content.replace(decisionRaw, "").trim();
      });

      // Split paragraphs on newlines
      const paragraphs = content
        .split("\n")
        .map((p) => p.trim())
        .filter((p) => p);

      return {
        id: pid,
        name: name,
        paragraphs: paragraphs,
        decisions: decisions,
        images: images,
        next: clickGoto,
      };
    },
  );

  // Write the output to a new file in the output directory
  const outputPath = path.join(outputDir, filename.replace(".html", ".json"));
  fs.writeFileSync(outputPath, JSON.stringify(passages, null, 4));
});
