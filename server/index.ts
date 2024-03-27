import communityRouter from "@/server/routers/community";
import { router } from "@/server/trpc";
import { inferReactQueryProcedureOptions } from "@trpc/react-query";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export const appRouter = router({
  community: communityRouter,
});

export type AppRouter = typeof appRouter;

// infer the types for router
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
