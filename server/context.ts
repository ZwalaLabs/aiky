import { auth } from "@/lib/auth";

export async function createContext() {
  return {
    session: await auth(),
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
