import { CreatePostForm } from "./CreatePostForm";
import FullFeed from "./FullFeed";

async function Page() {
  return (
    <>
      <CreatePostForm />

      <FullFeed />
    </>
  );
}

export default Page;
