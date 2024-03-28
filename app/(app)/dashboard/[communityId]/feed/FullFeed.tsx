"use client";

import { RouterOutputs } from "@/server";
import { trpc } from "@/app/(app)/_trpc/client";
import { useParams } from "next/navigation";
import Feed from "./Feed";

function FullFeed({
  initialPosts,
}: {
  initialPosts: RouterOutputs["post"]["getAll"];
}) {
  const params = useParams<{ communityId: string }>();

  const getAllForms = trpc.post.getAll.useQuery(
    {
      communityId: params.communityId,
    },
    {
      initialData: initialPosts,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );

  return (
    <section className='mx-auto flex max-w-screen-lg flex-col gap-4 border-b border-b-gray-300 p-8'>
      {getAllForms.data?.map((post) => (
        <Feed
          key={post.id}
          title={post.title}
          content={post.content}
          likes={post.likes}
          time={post.timestamp}
          name={post.userId.name}
          image={post.userId.image}
        />
      ))}
    </section>
  );
}

export default FullFeed;
