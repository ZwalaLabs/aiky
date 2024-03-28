import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog";
import { FeedForm } from "./FeedForm";
import { useState } from "react";

export function DialogDemo({ placeholder }: { placeholder: string }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button variant="outline" onClick={()=>setOpen(true)}>{placeholder}</Button>
			<Dialog open={open}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Create Feed</DialogTitle>
					</DialogHeader>
					<FeedForm setOpen={setOpen} />
				</DialogContent>
			</Dialog>
		</>
	);
}
