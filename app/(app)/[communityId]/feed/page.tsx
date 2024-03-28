"use client";
import { useEffect, useState } from "react";
import Feed from "./Feed";

function Page() {
  const [allFeeds, setAllFeeds] = useState([
    {
      content: "Hello World",
      // communityId: '1',
      feedId: "41",
      author: {
        name: "John Doe",
        profilePic: "",
      },
      stats: {
        Like: 10,
        Comment: 5,
        time: 1711572786991,
      },
    },
  ]);

  useEffect(() => {
    // for api call to store the data in setAllFeeds
    console.log("api call");
  }, []);

  return (
    <>
      {allFeeds.map((feed, index) => (
        <Feed
          key={feed.feedId}
          content={feed.content}
          author={feed.author}
          stats={feed.stats}
          // if admin then he/she can post: firstFeed should be true that time
          firstFeed={index === 0}
        />
      ))}
    </>
  );
}

export default Page;
