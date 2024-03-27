"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { communityTypeValues, createCommunityInput } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function CreateForm() {
  const form = useForm<z.infer<typeof createCommunityInput>>({
    resolver: zodResolver(createCommunityInput),
    defaultValues: {
      name: "",
      description: "",
      type: communityTypeValues[0],
    },
  });

  function onSubmit(values: z.infer<typeof createCommunityInput>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-screen flex-[100%] flex-col justify-center gap-12 p-12"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-4xl font-bold leading-normal">
                What will your community be known as?
              </FormLabel>
              <FormControl>
                <Input placeholder="Community Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl font-bold">
                Describe your community
              </FormLabel>
              <FormControl>
                <Input placeholder="Community Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-2xl font-bold">
                Select the category of your community.
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col gap-4"
                >
                  {communityTypeValues.map((category) => (
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
        <Button type="submit" className="w-full text-xl font-bold">
          Get Started
        </Button>
      </form>
    </Form>
  );
}
