import { authedProcedure, router } from "@/server/trpc";
import { createPostSchema } from "@/lib/zodSchemas";
import db from "@/db";
import { InsertPost, posts } from "@/db/schema";

const postRouter = router({
  getAll: authedProcedure.query(async () => "true"),
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
