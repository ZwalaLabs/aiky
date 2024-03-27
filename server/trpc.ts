import db from "@/db";
import { users } from "@/db/schema";
import { Context } from "@/server/context";
import { initTRPC, TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";

export const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const authedProcedure = publicProcedure.use(async (opts) => {
  const { ctx } = opts;
  if (!ctx.session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });

  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, ctx.session.user.id));

  if (!user[0]) throw new TRPCError({ code: "UNAUTHORIZED" });

  return opts.next({
    ...opts,
    ctx: {
      ...ctx,
      session: ctx.session,
      user: user[0],
    },
  });
});
