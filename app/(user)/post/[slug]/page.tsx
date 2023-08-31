import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
    {slug}
  `;

  const slug : Post[] = await client.fetch(query)
  const slugRoutes = slug.map((slug) => slug.slug.current) 

  return slugRoutes.map(slug => ({
    slug,
  }))
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
    }`;

  const post: Post = await client.fetch(query, { slug });
  //   console.log(post);

  return (
    <article className="px-8 pb-12">
      <section className="space-y-2 border border-[rgb(255,215,0)] text-white rounded-lg">
        <div className="relative min-h-50 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-6">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
              className="object-cover object-center mx-auto"
            />
          </div>
          <section className="p-4 bg-[rgb(255,215,0)] w-full rounded-lg">
            <div className="flex flex-col md:flex-row justify-between gap-y-4">
              <div>
                <h1 className="text-4xl font-bold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  alt={post.author.name}
                  src={urlFor(post.author.image).url()}
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div className="w-64">
                  <h3 className="font-bold text-xl">{post.author.name}</h3>
                  <div>{/** This is Todo BID */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-italic pt-6">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-sm text-lg font-semibold mt-2"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichText} />
    </article>
  );
}

export default Post;
