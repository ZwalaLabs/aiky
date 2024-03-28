import { appRouter } from "@/server";
import { createCallerFactory } from "@/server/trpc";
import { headers } from "next/headers";

const createCaller = createCallerFactory(appRouter);

export const serverClient = createCaller({
  session: await fetch(`${process.env.VERCEL_URL}/api/me`, {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json()),
});
