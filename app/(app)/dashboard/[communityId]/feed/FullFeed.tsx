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

  const getAllPosts = trpc.post.getAll.useQuery(
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
    <section className="mx-auto flex max-w-screen-lg flex-col gap-4 p-8">
      {getAllPosts.data?.map((post) => <Feed key={post.id} post={post} />)}
    </section>
  );
}

export default FullFeed;
