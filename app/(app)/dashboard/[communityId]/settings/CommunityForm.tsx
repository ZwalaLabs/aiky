"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";

const communityFormSchema = z.object({
	image: z.string(),
	title: z.string().min(2, {
		message: "Title must be at least 2 characters.",
	}),
	description: z.string().min(2, {
		message: "Description must be at least 2 characters.",
	}),
	coverPhoto: z.string(),
});

export function CommunityForm() {
	// 1. Define community form.
	const form = useForm<z.infer<typeof communityFormSchema>>({
		resolver: zodResolver(communityFormSchema),
		defaultValues: {
			image: "",
			title: "",
			description: "",
			coverPhoto: "",
		},
	});
	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof communityFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{/* Community Image */}
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Community Image</FormLabel>
							<FormControl>
								<Input type="file" {...field} />
							</FormControl>
							<FormDescription>This is the community image.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Community Title */}
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Community Title</FormLabel>
							<FormControl>
								<Input placeholder="Enter Community Title" {...field} />
							</FormControl>
							<FormDescription>This is the Community title.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Community Description */}
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Community Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Enter Community Description"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This is the Community description.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Cover Photo */}
				<FormField
					control={form.control}
					name="coverPhoto"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Cover Photo</FormLabel>
							<FormControl>
								<Input type="file" {...field} />
							</FormControl>
							<FormDescription>
								Add a cover photo to your community.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
