import { authedProcedure, router } from "@/server/trpc";
import { createCommunityInput, editCommunityInput } from "@/lib/zodSchemas";
import db from "@/db";
import { communities, InsertCommunity } from "@/db/schema";
import { and, eq } from "drizzle-orm";

const communityRouter = router({
  getAll: authedProcedure.query(async () => "true"),
  add: authedProcedure
    .input(createCommunityInput)
    .mutation(async ({ ctx, input }) => {
      const community: InsertCommunity = {
        name: input.name,
        publicURL: input.name,
        description: input.description,
        type: input.type,
        userId: ctx.user.id,
      };

      const ids = await db
        .insert(communities)
        .values(community)
        .returning({ id: communities.id });

      return {
        message: `Community ${input.name} created`,
        communityId: ids[0].id,
      };
    }),
  edit: authedProcedure
    .input(editCommunityInput)
    .mutation(async ({ ctx, input }) => {
      const { communityId, ...edit } = input;

      await db
        .update(communities)
        .set({ ...edit })
        .where(
          and(
            eq(communities.id, communityId),
            eq(communities.userId, ctx.user.id),
          ),
        );

      return {
        message: `Community updated`,
      };
    }),
});

export default communityRouter;
