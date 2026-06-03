// Shape of the data passed from Astro pages (via getCollection) into the
// portfolio components. Dates arrive as Date objects from the content collections.
export interface ProjectMeta {
  title: string;
  status: 'live' | 'in progress' | 'idea' | 'dead';
  caption: string;
  link?: string;
  repo?: string;
  date: Date | string;
}

export interface SnippetMeta {
  title: string;
  caption: string;
  date: Date | string;
}

export const toSlug = (title: string) => title.replace(/\s+/g, '-').toLowerCase();

// Format in UTC so a "2026-06-02" frontmatter date (parsed as UTC midnight)
// doesn't render as the 1st in a behind-UTC timezone. Matches FormattedDate.astro
// so cards and post pages always show the same string.
export const formatDate = (date: Date | string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

// Project status chip colors, ported from the old MUI theme's custom `status` key.
export const STATUS_COLORS: Record<string, string> = {
  dead: '#ff4a4a',
  inprogress: '#6573c3',
  idea: '#d56edf',
  live: '#579f57',
};
