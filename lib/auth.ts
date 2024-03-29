import db from "@/db";
import { users } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { and, eq } from "drizzle-orm";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

export const config = {
  adapter: DrizzleAdapter(db) as Adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  theme: {
    colorScheme: "light",
    logo: "/favicon.ico",
    brandColor: "#e11d48",
  },
  callbacks: {
    async session({ session }) {
      if (!session.user || !session.user.email || !session.user.name) {
        return session;
      }

      const user = await db
        .select()
        .from(users)
        .where(
          and(
            eq(users.email, session.user.email),
            eq(users.name, session.user.name),
          ),
        );

      session.user.id = user[0].id;

      return session;
    },
  },
} satisfies NextAuthOptions;

// Use it in server contexts instead of getServerSession
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
