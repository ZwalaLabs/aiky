"use client";

import { RouterOutputs } from "@/server";
import { trpc } from "@/app/(app)/_trpc/client";
import { useParams } from "next/navigation";

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
    <section>
      {getAllForms.data?.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </section>
  );
}

export default FullFeed;
