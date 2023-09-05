import { santaLuciaHonduras } from "../assets/images";
import type { JourneyPageData } from "src/types";

// TODO can update this to get data from a backend or cms at a later date

export const journeyPageData: JourneyPageData[] = [
  // -------------------- Case 1 --------------------
  {
    path: "case-1",
    description: "TODO get description from Medha",
    isStart: true,
    title: "Case 1",
    backHref: "/journeys",
    nextHref: "/journeys/case-1/1",
    paragraphs: [
      "This is an activity meant to cultivate empathy for the situations that our patients may endure as they seek to cross the U.S./Mexican Border.",
      "As you work your way through this exercise, there will be parts of the story that may be triggering. Please take the time to care for your own mental and emotional health as needed, and step away when you need to. We will reflect on this exercise together as a group.",
      "Your GOAL as you put yourself in the character's shoes, is to cross the border.",
      "The PURPOSE of this exercise for us as healthcare providers is to understand that coming here, no matter what route our patients may take, is often not a choice.",
    ],
  },
  {
    path: "case-1/1",
    title: "Case 1",
    backHref: "/journeys/case-1",
    nextHref: "#", // TODO: add next page
    paragraphs: [
      "You and your family live in Honduras. Every day, you look forward to gathering around the table to share breakfast together. It is one of your favorite moments of peace. You and your husband have two children, a girl and a boy, who you love very much. A few weeks ago, you found out you had a third child on the way. Each evening, after the children come home from school, your husband joins the neighborhood watch team. There have been rumors of gang activity close by, and he wants to play his role in keeping your spot of peace safe. You are nervous for his safety, but you know that you cannot stop him from going, so you pray that he will be okay. Plus, his father and brother are part of the neighborhood watch as well, so you tell yourself that it will all be okay.",
    ],
    images: [
      {
        src: santaLuciaHonduras,
        alt: "Santa Lucia, Honduras",
      },
    ],
  },

  // -------------------- TODO Case 2 --------------------

  // -------------------- TODO Case 3 --------------------
];