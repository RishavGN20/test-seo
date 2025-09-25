// lib/seo/buildMetadata.ts

import { Metadata } from 'next';
import { PageSEOConfig } from './pagesMetaData';

export function buildMetadata(config: PageSEOConfig): Metadata {
  const {
    title,
    description,
    canonical,
    twitterCard,
    twitterAuthor,
  } = config;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'GrowthNatives',
      locale: 'en_US',
      type: 'website',
      ...(updatedAt && { modifiedTime: updatedAt }),
    },
    twitter: {
      card: twitterCard as 'summary_large_image' | 'summary' | 'player' | 'app',
      title,
      description,
      creator: twitterAuthor ? `@${twitterAuthor}` : undefined,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  };
}
