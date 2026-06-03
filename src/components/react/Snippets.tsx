import { SnippetCard } from './SnippetCard';
import { GridLayout } from './GridLayout';
import type { SnippetMeta } from './types';

export const Snippets = ({ snippets }: { snippets: SnippetMeta[] }) => {
  return (
    <GridLayout title={'Snippets'}>
      {snippets.map((snippet) => (
        <SnippetCard
          key={`${snippet.title}-${snippet.date}`}
          title={snippet.title}
          date={snippet.date}
          caption={snippet.caption}
        />
      ))}
    </GridLayout>
  );
};
