import { authedProcedure, router } from "@/server/trpc";
import { doByCommunityId } from "@/lib/zodSchemas";
import db from "@/db";
import { InsertMember, members } from "@/db/schema";

const memberRouter = router({
  add: authedProcedure
    .input(doByCommunityId)
    .mutation(async ({ ctx, input }) => {
      const member: InsertMember = {
        userId: ctx.user.id,
        communityId: input.communityId,
      };

      await db.insert(members).values(member);

      return {
        message: `Joined community`,
      };
    }),
});

export default memberRouter;
