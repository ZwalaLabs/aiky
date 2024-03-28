import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Community from "./Community";
import Chat from "./Chat";

export function TabSettings({ params }: { params: { communityId: string } }) {
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
        <Community params={params} />
      </TabsContent>
      <TabsContent value="chat-settings">
        <Chat />
      </TabsContent>
    </Tabs>
  );
}
