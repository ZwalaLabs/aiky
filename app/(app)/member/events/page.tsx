"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { emptyEvents } from "../constant";
import Image from "next/image";

export default function Events() {
	// State for upcoming events
	const [upcomingEvents, setUpcomingEvents] = useState([]);
	// State for passed events
	const [passedEvents, setPassedEvents] = useState([]);

	return (
		<>
			<CardTitle className="py-4 px-2 text-3xl">Events</CardTitle>
			<Tabs defaultValue="Upcoming-Events" className="w-[600px] px-2 py-4">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="Upcoming-Events">Upcoming Events</TabsTrigger>
					<TabsTrigger value="Passed-Events">Passed Events</TabsTrigger>
				</TabsList>
				{/* Upcoming Events */}
				<TabsContent value="Upcoming-Events">
					{upcomingEvents.length === 0 ? (
						<div className="p-4 flex flex-col items-center justify-center w-full">
							<Image
								src={emptyEvents.image}
								alt={emptyEvents.dynamicTitle("upcoming")}
								sizes="30vw"
								width="300"
								height="300"
								className="flex-1 object-cover"
								priority
							/>
							<h1 className="font-bold py-3 px-2 text-2xl">{emptyEvents.dynamicTitle("upcoming")}</h1>
							<p className='py-3 px-2'>{emptyEvents.content}</p>
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
						<div className="p-4 flex flex-col items-center justify-center w-full">
							<Image
								src={emptyEvents.image}
								alt={emptyEvents.dynamicTitle("upcoming")}
								sizes="30vw"
								width="300"
								height="300"
								className="flex-1 object-cover"
								priority
							/>
							<h1 className="font-bold py-3 px-2 text-2xl">{emptyEvents.dynamicTitle("past")}</h1>
							<p className='py-3 px-2'>{emptyEvents.content}</p>
						</div>
					) : (
						<h1>Passed Events</h1>
					)}
				</TabsContent>
			</Tabs>
		</>
	);
}
