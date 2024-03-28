import { CreatePostForm } from "./CreatePostForm";
import FullFeed from "./FullFeed";
import { getAllPosts } from "@/lib/dbQueries";

async function Page({ params }: { params: { communityId: string } }) {
  const allPosts = await getAllPosts(params.communityId);

  return (
    <>
      <CreatePostForm />

      <FullFeed initialPosts={allPosts} />
    </>
  );
}

export default Page;
