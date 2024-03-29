import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Community from "./Community";
import AddChatURL from "./AddChatURL";
import db from "@/db";
import { eq } from "drizzle-orm";
import { communities } from "@/db/schema";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export async function TabSettings({
  params,
}: {
  params: { communityId: string };
}) {
  const community = await db.query.communities.findFirst({
    where: eq(communities.id, params.communityId),
  });

  if (!community) return <div>Community not found</div>;

  return (
    <Tabs defaultValue="community-settings">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger
          value="community-settings"
          className="border-primary rounded-none text-2xl data-[state=active]:border-b-2 data-[state=active]:font-semibold"
        >
          Community
        </TabsTrigger>
        <TabsTrigger
          value="chat-settings"
          className="border-primary rounded-none  text-2xl data-[state=active]:border-b-2 data-[state=active]:font-semibold"
        >
          Chat
        </TabsTrigger>
      </TabsList>
      <TabsContent value="community-settings">
        <Community initCommunity={community} />
      </TabsContent>
      <TabsContent value="chat-settings">
        {community.chatURL ? (
          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-black">Connected</h1>
              <Link href={community.chatURL}>
                <SquareArrowOutUpRight />
              </Link>
            </div>
            <Image src="/discord.svg" alt="discord" width={300} height={100} />
          </div>
        ) : (
          <AddChatURL initCommunity={community} />
        )}
      </TabsContent>
    </Tabs>
  );
}
