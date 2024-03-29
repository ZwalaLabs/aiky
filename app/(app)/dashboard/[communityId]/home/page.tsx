import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheck, MessagesSquare, Users } from "lucide-react";
import Link from "next/link";
import db from "@/db";
import { and, eq } from "drizzle-orm";
import { communities } from "@/db/schema";
import { auth } from "@/lib/auth";
import CommunityLink from "@/app/(app)/dashboard/[communityId]/home/CommunityLink";

async function Page({ params }: { params: { communityId: string } }) {
  const session = await auth();

  const community = await db.query.communities.findFirst({
    where: and(
      eq(communities.id, params.communityId),
      eq(communities.userId, session?.user?.id ?? ""),
    ),
  });

  if (!community) return <div>Community not found</div>;

  const { name, publicURL, chatURL } = community;

  return (
    <>
      <CardTitle className="pb-6 pt-2 text-3xl">
        {name}
        <div className="flex items-center gap-1 pt-2">
          <p className="text-sm underline">/{publicURL}</p>
          <CommunityLink URL={publicURL} />
        </div>
      </CardTitle>
      <div className="flex gap-4">
        <Card className="w-2/5 rounded-xl p-1">
          <CardHeader className="flex-row items-center gap-2 pb-2 text-slate-400">
            <Users />
            <CardTitle className="text-base">Total Members</CardTitle>
          </CardHeader>
          <CardContent className="py-2 text-3xl font-bold">
            {/* Members of the group */}1
          </CardContent>
          {/*<CardFooter className="flex-row items-center gap-2 pt-2 text-xs text-slate-600">*/}
          {/*  <ArrowUp />*/}
          {/*  <CardTitle className="text-sm">0 in last 30 days</CardTitle>*/}
          {/*</CardFooter>*/}
        </Card>
        <Card className="w-2/5 rounded-xl p-1">
          <CardHeader className="flex-row items-center gap-2 pb-2 text-slate-400">
            <MessagesSquare />
            <CardTitle className="text-base">Chat Connections</CardTitle>
          </CardHeader>
          {chatURL ? (
            <CardFooter className="flex-row items-center gap-2 text-green-600">
              Discord Linked
              <CircleCheck />
            </CardFooter>
          ) : (
            <>
              <Button className="my-3 ml-10 rounded-xl border bg-transparent  p-2 px-4 text-slate-800 hover:bg-blue-700 hover:text-white">
                <Link href="settings">Connect to Discord</Link>
              </Button>
            </>
          )}
        </Card>
      </div>
    </>
  );
}

export default Page;
