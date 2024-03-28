"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Community from "./Community"
import Chat from "./Chat"

export function TabSettings() {
  return (
    <Tabs defaultValue="community-settings">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="community-settings">Community</TabsTrigger>
        <TabsTrigger value="chat-settings">Chat</TabsTrigger>
      </TabsList>
      <TabsContent value="community-settings">
        <Community/>
      </TabsContent>
      <TabsContent value="chat-settings">
        <Chat />
      </TabsContent>
    </Tabs>
  )
}
