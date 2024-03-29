import FullFeed from "@/app/(app)/dashboard/[communityId]/feed/FullFeed";
import { getAllPosts } from "@/lib/dbQueries";

export default async function Page({
  params,
}: {
  params: { communityId: string };
}) {
  const allPosts = await getAllPosts(params.communityId);

  return <FullFeed initialPosts={allPosts} />;
}
