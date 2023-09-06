/** 
 * Type definitions for the whole project.
 * Only created a separate file because these needed to be imported from typescript files
 * and it doesn't seem like you can import types from .astro files
*/

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface JourneyCardData {
  title: string;
  description?: string;
  buttonText: string;
  href: string;
}

export interface JourneyLayoutDecisionData {
  href: string;
  buttonText: string;
}

export interface JourneyLayoutData {
  title: string;
  paragraphs?: string[];
  nextHref?: string;
  nextName?: string
  decisions?: JourneyLayoutDecisionData[];
  images?: ImageData[];
}

export interface JourneyPageData extends JourneyLayoutData {
  path: string;
  description?: string;
  isStart?: boolean;
}
