"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";


const feedFormSchema = z.object({
	"Feed Title": z.string().min(2, {
		message: "Feed Title must be at least 2 characters.",
	}),
	"Feed Content": z.string().min(2, {
		message: "Feed Content must be at least 2 characters.",
	})
});

export function FeedForm({setOpen}) {
	// 1. Define your form.
	const form = useForm<z.infer<typeof feedFormSchema>>({
		resolver: zodResolver(feedFormSchema),
		defaultValues: {
			"Feed Title": "",
			"Feed Content": ""
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof feedFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		// form will not be submitted until there is no errors
		setOpen(false);
		// post the feed and update the feed list
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="Feed Title"
					render={({ field }:{field: object}) => (
						<FormItem>
							<FormLabel>Feed Title</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter the name of your community"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="Feed Content"
					render={({ field }:{field: object}) => (
						<FormItem>
							<FormLabel>Feed Description</FormLabel>
							<FormControl>
								<Textarea 
									placeholder="Enter the Description of your feed"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
				{/* Option for preview if have time */}
			</form>
		</Form>
	);
}