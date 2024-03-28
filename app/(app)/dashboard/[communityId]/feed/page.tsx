import { FeedForm } from "./FeedForm";
import FullFeed from "./FullFeed";

async function Page() {
  return (
    <>
      <FeedForm />

      <FullFeed />
    </>
  );
}

export default Page;
