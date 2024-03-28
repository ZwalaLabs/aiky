import { CreatePostForm } from "./CreatePostForm";
import FullFeed from "./FullFeed";
import { serverClient } from "@/app/(app)/_trpc/serverClient";

async function Page() {
  const todo = await serverClient.community.getAll();

  return (
    <>
      <CreatePostForm />

      <FullFeed />
    </>
  );
}

export default Page;
