import { Providers } from "./Providers";
import { About } from "./About";
import { Projects } from "./Projects";
import { Snippets } from "./Snippets";
import { BlogPosts } from "./BlogPosts";
import type { ProjectMeta, SnippetMeta, BlogMeta } from "./types";

// Island entry point for the homepage body: About + Projects + Snippets + Blog,
// fed by data the Astro page pulls from the content collections.
export default function Home({
  projects,
  snippets,
  posts,
}: {
  projects: ProjectMeta[];
  snippets: SnippetMeta[];
  posts: BlogMeta[];
}) {
  return (
    <Providers>
      <About />
      <Projects projects={projects} />
      <Snippets snippets={snippets} />
      {posts.length > 0 && <BlogPosts posts={posts} />}
    </Providers>
  );
}
