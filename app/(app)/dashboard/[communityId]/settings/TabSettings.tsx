import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Community from "./Community";
import Chat from "./Chat";
import db from "@/db";
import { eq } from "drizzle-orm";
import { communities } from "@/db/schema";

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
        <Chat initCommunity={community} />
      </TabsContent>
    </Tabs>
  );
}
