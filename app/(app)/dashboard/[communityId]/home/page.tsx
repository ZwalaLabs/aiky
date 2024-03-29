"use client";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { Users, ArrowUp, MessagesSquare, Copy } from "lucide-react";
import Link from "next/link";

function Page({ params }: { params: { communityId: string } }) {
	const copyLinkToClipboard = () => {
		// Adding url for community page
		const copiedText = params.communityId;

		// Use the Clipboard API to copy the URL to the clipboard
		navigator.clipboard
			.writeText(copiedText)
			.then(() => {
        // success toast
				toast.success("Link copied to clipboard!");
			})
			.catch((error) => {
				// failure toast
        toast.error("Failed to copy link. Please try again.");
			});
	};
	return (
		<>
			<CardTitle className="text-3xl pt-2 pb-6">
				Home
				<div className='flex gap-1 items-center pt-2'>
					{/* Leads to individual page */}
					<a href="www.google.com" target='_blank' rel='noreferrer' className="text-xs underline">{params.communityId}</a>
          <div role='button' onClick={copyLinkToClipboard} onKeyDown={(event)=>{
            if(event.key === 'Enter'){
              copyLinkToClipboard()
            }
          }}>
					  <Copy/>
          </div>
				</div>
			</CardTitle>
			<div className="flex gap-4">
				<Card className="p-1 w-2/5 rounded-xl">
					<CardHeader className="flex-row pb-2 gap-2 items-center text-slate-400">
						<Users />
						<CardTitle className="text-base">Total Members</CardTitle>
					</CardHeader>
					<CardContent className="text-3xl font-bold py-2">
						{/* Members of the group */}1
					</CardContent>
					<CardFooter className="flex-row gap-2 items-center text-xs text-slate-600 pt-2">
						<ArrowUp />
						<CardTitle className="text-sm">0 in last 30 days</CardTitle>
					</CardFooter>
				</Card>
				<Card className="p-1 w-2/5 rounded-xl">
					<CardHeader className="flex-row pb-2 gap-2 items-center text-slate-400">
						<MessagesSquare />
						<CardTitle className="text-base">Chat Connections</CardTitle>
					</CardHeader>
					<Button className="p-2 px-4 border bg-transparent text-slate-800  ml-10 rounded-xl my-3 hover:bg-blue-700 hover:text-white">
						<Link href="settings">Connect to Discord</Link>
					</Button>
					<CardFooter className="flex-row gap-2 items-center text-slate-600">
						Link your discord now
					</CardFooter>
				</Card>
			</div>
		</>
	);

	// <>Hope {params.communityId}</>;
}

export default Page;
