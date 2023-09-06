import { type JourneyPageData, type JourneyLayoutDecisionData } from '../types'

export function toJourneyPageData (caseNumber: number, data: any): JourneyPageData[] {
  const caseName = `case-${caseNumber}`;
  const baseHref = `/journeys/${caseName}`;
  
  return data.map((data, index): JourneyPageData => {
    return {
      path: `${caseName}/${data.id}`,
      title: data.name,
      paragraphs: data.paragraphs,
      nextHref: data.next ? `${baseHref}/${data.next.pid}` : undefined,
      decisions: data.decisions?.map((decision): JourneyLayoutDecisionData => ({
        href: `${baseHref}/${decision.pid}`,
        buttonText: decision.text,
      })),
      images: data.images.map((image: string) => {
        return {
          src: image,
        };
      }),
      isStart: index === 0
    };
  });

}