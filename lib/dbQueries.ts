import db from "@/db";
import { desc, eq } from "drizzle-orm";
import { posts } from "@/db/schema";

export const getAllPosts = async (communityId: string) => {
  return db.query.posts.findMany({
    orderBy: desc(posts.timestamp),
    where: eq(posts.communityId, communityId),
    with: {
      userId: true,
    },
  });
};
