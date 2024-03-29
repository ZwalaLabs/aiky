"use client";
import { useState } from "react";
import { CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { emptyEvents } from "../../constant";
import Image from "next/image";

export default function Events() {
  // State for upcoming events
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  // State for passed events
  const [passedEvents, setPassedEvents] = useState([]);

  return (
    <>
      <CardTitle className="px-2 py-4 text-3xl">Events</CardTitle>
      <Tabs defaultValue="Upcoming-Events" className="w-[600px] px-2 py-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Upcoming-Events">Upcoming Events</TabsTrigger>
          <TabsTrigger value="Passed-Events">Passed Events</TabsTrigger>
        </TabsList>
        {/* Upcoming Events */}
        <TabsContent value="Upcoming-Events">
          {upcomingEvents.length === 0 ? (
            <div className="flex w-full flex-col items-center justify-center p-4">
              <Image
                src={emptyEvents.image}
                alt={emptyEvents.dynamicTitle("upcoming")}
                sizes="30vw"
                width="300"
                height="300"
                className="flex-1 object-cover"
                priority
              />
              <h1 className="px-2 py-3 text-2xl font-bold">
                {emptyEvents.dynamicTitle("upcoming")}
              </h1>
              <p className="px-2 py-3">{emptyEvents.content}</p>
            </div>
          ) : (
            // {upcomingEvents.map(({eventName}:{eventName:string}) => {
            //     <h1>{eventName}</h1>
            // })}
            <h1>Event</h1>
          )}
        </TabsContent>
        {/* Passed Events */}
        <TabsContent value="Passed-Events">
          {passedEvents.length === 0 ? (
            <div className="flex w-full flex-col items-center justify-center p-4">
              <Image
                src={emptyEvents.image}
                alt={emptyEvents.dynamicTitle("upcoming")}
                sizes="30vw"
                width="300"
                height="300"
                className="flex-1 object-cover"
                priority
              />
              <h1 className="px-2 py-3 text-2xl font-bold">
                {emptyEvents.dynamicTitle("past")}
              </h1>
              <p className="px-2 py-3">{emptyEvents.content}</p>
            </div>
          ) : (
            <h1>Passed Events</h1>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}
