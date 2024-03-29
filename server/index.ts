import communityRouter from "@/server/routers/community";
import { router } from "@/server/trpc";
import { inferReactQueryProcedureOptions } from "@trpc/react-query";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import postRouter from "@/server/routers/post";
import memberRouter from "@/server/routers/member";

export const appRouter = router({
  community: communityRouter,
  post: postRouter,
  member: memberRouter,
});

export type AppRouter = typeof appRouter;

// infer the types for router
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
