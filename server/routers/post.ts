import { authedProcedure, router } from "@/server/trpc";
import {
  createPostSchema,
  doByCommunityId,
  doByPostId,
} from "@/lib/zodSchemas";
import db from "@/db";
import { InsertPost, posts } from "@/db/schema";
import { getAllPosts } from "@/lib/dbQueries";
import { eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

const postRouter = router({
  getAll: authedProcedure
    .input(doByCommunityId)
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
  like: authedProcedure.input(doByPostId).mutation(async ({ ctx, input }) => {
    const { user } = ctx;

    const post = await db.query.posts.findFirst({
      where: eq(posts.id, input.postId),
    });

    if (!post)
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Post not found",
      });

    if (post.likes.includes(user.id))
      throw new TRPCError({
        code: "CONFLICT",
        message: "Already liked",
      });

    await db
      .update(posts)
      .set({ likes: [...post.likes, user.id] })
      .where(eq(posts.id, input.postId));

    return {
      message: `Liked`,
    };
  }),
});

export default postRouter;
