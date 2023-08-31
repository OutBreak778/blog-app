import urlFor from "@/lib/urlFor";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[rgb(255,215,0)] mb-10" />
      <div className="grid grid-col-1 md:grid-cols-2 gap-6 gap-y-10 py-14">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>

            <div  className="flex flex-col group cursor-pointer px-6">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform ease-out duration-200">
                <Image
                  src={urlFor(post.mainImage).url()}
                  className="object-cover object-left lg:object-center rounded-lg"
                  alt="Image"
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-3 flex justify-center">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p className="font-medium">
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="text-gray-400 line-clamp-2">{post.description}</p>
              </div>
              <p className="mt-2 flex items-center font-bold group-hover:underline">
                Read Post
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
