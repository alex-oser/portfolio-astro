import { BlogCard } from "./BlogCard";
import { GridLayout } from "./GridLayout";
import type { BlogMeta } from "./types";

export const BlogPosts = ({ posts }: { posts: BlogMeta[] }) => {
  return (
    <GridLayout title={"Blog"}>
      {posts.map((post) => (
        <BlogCard
          key={`${post.title}-${post.date}`}
          title={post.title}
          date={post.date}
          caption={post.caption}
        />
      ))}
    </GridLayout>
  );
};
