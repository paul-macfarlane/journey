/** 
 * Type definitions for the whole project.
 * Only created a separate file because these needed to be imported from typescript files
 * and it doesn't seem like you can import types from .astro files
*/

export interface ImageData {
  src: string | ImageMetadata;
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

export interface JourneyLayoutData {
  title: string;
  backHref: string;
  paragraphs?: string[];
  nextHref?: string;
  decisions?: JourneyCardData[];
  images?: ImageData[];
}

export interface JourneyPageData extends JourneyLayoutData {
  path: string;
  description?: string;
  isStart?: boolean;
}
