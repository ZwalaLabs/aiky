import { auth } from "@/lib/auth";
import { appRouter } from "@/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = async (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => {
      return {
        session: await auth(),
      };
    },
  });

export { handler as GET, handler as POST };
