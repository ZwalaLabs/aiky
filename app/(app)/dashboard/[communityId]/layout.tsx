import Header from "@/components/Layout/app/Header";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import db from "@/db";
import { and, eq } from "drizzle-orm";
import { communities } from "@/db/schema";
import { auth } from "@/lib/auth";

export default async function CommunityLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: { communityId: string };
}) {
  const session = await auth();

  const community = await db.query.communities.findFirst({
    where: and(
      eq(communities.id, params.communityId),
      eq(communities.userId, session?.user?.id ?? ""),
    ),
  });

  if (!community) return <div>Not Authorized/ Community not found</div>;

  return (
    <>
      <Header name={community.name} />

      <div className="flex">
        <Sidebar />

        <main className="no-scrollbar ml-60 w-full overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  );
}
