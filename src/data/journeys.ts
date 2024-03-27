import { type JourneyPageData, type JourneyLayoutDecisionData, type JourneyImage } from "../types";

export function toJourneyPageData (caseNumber: number, data: any): JourneyPageData[] {
  const caseName = `case-${caseNumber}`;
  const baseHref = `/journeys/${caseName}`;
  
  return data.map((data, index): JourneyPageData => {
    return {
      path: `${caseName}/${data.id}`,
      title: data.name,
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
      isStart: index === 0
    };
  });
}