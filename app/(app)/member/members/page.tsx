"use client";
import { CardContent, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Member from "./Member";

function Members() {
	// All Members in the system
	const [allMembers, setAllMembers] = useState([
		{
            id:"1",
			photo: "https://randomuser.me/api/port",
			name: "John Doe",
			location: "Lagos, Nigeria",
			about: "I am a software engineer",
			socialHandles: "https://twitter.com/johndoe",
		},
	]);

	return (
		<div>
			<CardTitle className="py-4 px-2 text-3xl">Members</CardTitle>
			<small className="text-slate-400 px-4">
				Total Count: {allMembers.length}
			</small>
			<CardContent className="py-4 px-2">
				{allMembers.map(
					({
						id,
						photo,
						name,
						location,
						about,
						socialHandles,
					}: {
						id: string;
						photo: string;
						name: string;
						location: string;
						about: string;
						socialHandles: string;
					}) => (
						<Member
							key={id}
							photo={photo}
							name={name}
							location={location}
							about={about}
							socialHandles={socialHandles}
						/>
					),
				)}
			</CardContent>
		</div>
	);
}

export default Members;
