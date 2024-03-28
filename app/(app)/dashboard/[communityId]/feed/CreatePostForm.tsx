"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createPostSchema } from "@/lib/zodSchemas";
import { trpc } from "@/app/(app)/_trpc/client";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

export function CreatePostForm() {
  const params = useParams<{ communityId: string }>();

  const trpcUtils = trpc.useUtils();

  const addPost = trpc.post.add.useMutation({
    trpc: { abortOnUnmount: false },
    onSuccess: ({ message }) => {
      toast.success(message);

      form.reset();
    },
    onError: ({ message }) => {
      toast.error("Something went wrong");
    },
    onSettled: () => trpcUtils.post.getAll.invalidate(),
  });

  const form = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      content: "",
      communityId: params.communityId,
    },
  });

  function onSubmit(values: z.infer<typeof createPostSchema>) {
    addPost.mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex max-w-screen-lg flex-col gap-4 border-b border-b-gray-300 p-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }: { field: object }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Title</FormLabel>
              <FormControl>
                <Input placeholder="Title of your post" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }: { field: object }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Share your thoughts" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="self-center text-xl">
          Post
        </Button>
      </form>
    </Form>
  );
}
