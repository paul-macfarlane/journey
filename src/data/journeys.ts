import {
  type JourneyPageData,
  type JourneyLayoutDecisionData,
  type JourneyImage,
} from "../types";

export function toJourneyPageData(
  caseNumber: number,
  data: any,
): JourneyPageData[] {
  const caseName = `case-${caseNumber}`;
  const baseHref = `/journeys/${caseName}`;

  return data.map((data, index): JourneyPageData => {
    return {
      path: `${caseName}/${data.id}`,
      title: data.name,
      caseNumber,
      paragraphs: data.paragraphs,
      nextHref: data.next ? `${baseHref}/${data.next.pid}` : undefined,
      nextName: data.next ? data.next.name : undefined,
      decisions: data.decisions?.map((decision): JourneyLayoutDecisionData => ({
        href: `${baseHref}/${decision.pid}`,
        buttonText: decision.text,
      })),
      images: data.images.map(({ src, caption }: JourneyImage) => {
        return {
          src,
          caption,
        };
      }),
      isStart: index === 0,
    };
  });
}

/**
 * Every case opens with a Preface that states what the reader is being asked to
 * do — "Your GOAL as you put yourself in the character's shoes, is to ...". That
 * sentence is the case's own summary, so the journeys index reuses it on the
 * cards rather than restating each case by hand.
 *
 * Returns undefined when a Preface is worded differently, in which case the card
 * simply shows no summary.
 */
export function toCaseGoal(paragraphs?: string[]): string | undefined {
  const goal = paragraphs
    ?.map((paragraph) => paragraph.match(/Your GOAL[^.]*?\bis to\s+([^.]+)/i))
    .find(Boolean)?.[1]
    .trim();

  if (!goal) {
    return undefined;
  }

  return `${goal[0].toUpperCase()}${goal.slice(1)}.`;
}
