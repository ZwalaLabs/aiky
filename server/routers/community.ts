import { authedProcedure, router } from "@/server/trpc";
import { createCommunityInput } from "@/lib/zodSchemas";
import db from "@/db";
import { communities, InsertCommunity } from "@/db/schema";

const formRouter = router({
  getAll: authedProcedure.query(async () => true),
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
});

export default formRouter;
