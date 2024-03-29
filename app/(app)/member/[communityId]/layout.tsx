import Header from "@/components/Layout/app/Header";
import { ReactNode } from "react";
import MemberSidebar from "./MemberSidebar";
import JoinChatSideBar from "@/app/(app)/member/[communityId]/JoinChatSideBar";
import db from "@/db";
import { and, eq } from "drizzle-orm";
import { communities, members } from "@/db/schema";
import { auth } from "@/lib/auth";

export default async function MemberLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: { communityId: string };
}) {
  const session = await auth();

  const community = await db.query.communities.findFirst({
    where: eq(communities.id, params.communityId),
  });

  const isMember = await db.query.members.findFirst({
    where: and(
      eq(members.userId, session?.user?.id ?? ""),
      eq(members.communityId, params.communityId),
    ),
  });

  if (!community) return <div>Community not found</div>;

  if (!isMember) return <div>Not a member of this community</div>;

  const { name, chatURL } = community;

  return (
    <>
      <Header name={name} />

      <div className="flex gap-20">
        <MemberSidebar />

        <main className="no-scrollbar flex-1 overflow-y-scroll">
          {children}
        </main>

        {chatURL ? <JoinChatSideBar chatURL={chatURL} /> : null}
      </div>
    </>
  );
}
