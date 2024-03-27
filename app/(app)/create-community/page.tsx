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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { tagLineDescription, categoryGroupOptions } from "./constant";

const formSchema = z.object({
	Name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	Description: z.string().min(2, {
		message: "Description must be at least 2 characters.",
	}),
	Category: z.string().min(2, {
		message: "Category must be at least 2 characters.",
	}),
	// Category: z.enum(["Technology", "Science", "Movies", "Music"], {
	// 	required_error: "You must select a category.",
	// }),
	// EnableInvitation: z.boolean(),
});

export function CategoryGroup() {
	return (
		<RadioGroup defaultValue="comfortable">
			{categoryGroupOptions.map((category: string) => {
				<div className="flex items-center space-x-2">
					<RadioGroupItem value={category} id={category} />
					<Label htmlFor={category}>{category}</Label>
				</div>;
			})}
		</RadioGroup>
	);
}

export function CommunityForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			Name: "",
			Description: "",
            Category: 'Technology'
			// EnableInvitation: false,
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="Name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Community Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter the name of your community"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="Description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Community Description</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter the Description of your community"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This is your public display Description.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="Category"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Select the category of your community.</FormLabel>
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="flex flex-col space-y-1"
								>
									{categoryGroupOptions.map((category: string) => (
										<FormItem
											className="flex items-center space-x-3 space-y-0"
											key={category}
										>
											<FormControl>
												<RadioGroupItem value={category} />
											</FormControl>
											<FormLabel className="font-normal">{category}</FormLabel>
										</FormItem>
									))}
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* <FormField
					control={form.control}
					name="EnableInvitation"
					render={({ field }) => (
						<FormItem className="flex">
							<Checkbox
								id="EnableInvitation"
								style={{
									border: "2px solid black",
									width: "20px",
                                    backgroundColor: "black"
								}}
							/>
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="EnableInvitation"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Enable Invitation
								</label>
							</div>
						</FormItem>
					)}
				/> */}
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}

export default function Home() {
	return (
		<main>
			<h1>Create Community</h1>
			<p>{tagLineDescription}</p>
			<CommunityForm />
		</main>
	);
}
