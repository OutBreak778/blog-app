import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";

const query = groq`
    *[_type == "post"] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

export const revalidate = 60;

export default async function HomePage() {
  // i have used next@13.2.3 version becuase the new version has changed the previewData() function from DarftMode() function

  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animte-pulse text-[rgb(255,215,0)]">
              Loading the Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  // console.log(posts)

  return (
    <BlogList posts={posts} />
    // <div>Not in Preview Mode`</div>
  );
}
