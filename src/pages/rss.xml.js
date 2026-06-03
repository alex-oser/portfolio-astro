import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../constants';
import { toSlug } from '../components/types';

// Mirrors the old gatsby-plugin-feed: one feed covering every post across
// projects and snippets, newest first.
export async function GET(context) {
  const collections = ['projects', 'snippets'];
  const items = [];

  for (const collection of collections) {
    const entries = await getCollection(collection);
    for (const entry of entries) {
      items.push({
        title: entry.data.title,
        description: entry.data.caption,
        pubDate: entry.data.date,
        link: `/${collection}/${toSlug(entry.data.title)}/`,
      });
    }
  }

  items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}
