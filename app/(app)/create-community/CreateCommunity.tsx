"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { createCommunityInput } from "@/lib/zodSchemas";
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
import { trpc } from "@/app/(app)/_trpc/client";
import toast from "react-hot-toast";
import { communityTypeValues } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Dumbbell, SquareChevronUp, TrendingUp, Wallet } from "lucide-react";

export const communityTypeIcons = {
  "Personal Development": <TrendingUp />,
  Finance: <Wallet />,
  Fitness: <Dumbbell />,
  Career: <SquareChevronUp />,
};

export default function CreateCommunity() {
  const router = useRouter();
  const trpcUtils = trpc.useUtils();

  const addMember = trpc.member.add.useMutation({
    trpc: { abortOnUnmount: false },
  });
  const addCommunityMutation = trpc.community.add.useMutation({
    trpc: { abortOnUnmount: false },
    onSuccess: ({ message, communityId }) => {
      addMember.mutate({ communityId });
      router.push(`/dashboard/${communityId}/home`);
      toast.success(message);
    },
    onError: ({ message }) => {
      if (message.includes("duplicate"))
        toast.error("A community with this URL already exists");
      else toast.error("Something went wrong");
    },
    onSettled: () => trpcUtils.community.getAll.invalidate(),
  });

  const form = useForm<z.infer<typeof createCommunityInput>>({
    resolver: zodResolver(createCommunityInput),
    defaultValues: {
      name: "",
      description: "",
      type: communityTypeValues[0],
    },
  });

  function onSubmit(values: z.infer<typeof createCommunityInput>) {
    addCommunityMutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="from-primary/35 flex h-screen flex-1 flex-col justify-center gap-12 bg-gradient-to-bl via-white to-white p-12"
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
                <Textarea placeholder="Community Description" {...field} />
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
                Category of your community
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
                      <FormLabel className="flex items-center gap-2 font-semibold">
                        {category}
                        <span className="text-primary">
                          {communityTypeIcons[category]}
                        </span>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mx-auto p-6 text-2xl font-bold"
          disabled={addCommunityMutation.isLoading}
        >
          Get Started
        </Button>
      </form>
    </Form>
  );
}
