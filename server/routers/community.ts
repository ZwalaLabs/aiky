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
        userId: ctx.user.id,
      };

      await db.insert(communities).values(community);

      return {
        message: `Community ${input.name} created`,
      };
    }),
});

export default formRouter;
