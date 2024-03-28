import { authedProcedure, router } from "@/server/trpc";
import { createPostSchema, getAllPostSchema } from "@/lib/zodSchemas";
import db from "@/db";
import { InsertPost, posts } from "@/db/schema";
import { getAllPosts } from "@/lib/dbQueries";

const postRouter = router({
  getAll: authedProcedure
    .input(getAllPostSchema)
    .query(async ({ input }) => getAllPosts(input.communityId)),
  add: authedProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;

      const post: InsertPost = {
        userId: user.id,
        communityId: input.communityId,
        title: input.title,
        content: input.content,
      };

      await db.insert(posts).values(post);

      return {
        message: `Posted`,
      };
    }),
});

export default postRouter;
