"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { SelectCommunity } from "@/db/schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trpc } from "@/app/(app)/_trpc/client";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
  chatURL: z.string(),
});

function Chat({ initCommunity }: { initCommunity: SelectCommunity }) {
  const [open, setOpen] = useState(false);

  const editCommunity = trpc.community.edit.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chatURL: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    editCommunity.mutate(
      {
        chatURL: values.chatURL,
        communityId: initCommunity.id,
      },
      {
        onSuccess({}) {
          toast.success("Discord linked successfully");

          form.reset();
          setOpen(false);
        },
      },
    );
  }

  return (
    <>
      <CardHeader>
        <CardTitle>Connect your chat</CardTitle>
      </CardHeader>
      <Card>
        <CardContent className="p-6">
          <CardTitle>
            <Image src="/discord.svg" alt="discord" width={300} height={100} />
          </CardTitle>
          <CardDescription className="py-2">
            Connect your Discord server to your community to enable chat
            features.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="h-10 w-full rounded-md bg-[#5865F2] px-4 py-2 text-white">
              Connect Discord
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-8">
              <DialogHeader>
                <DialogTitle>Add your discord server link</DialogTitle>
              </DialogHeader>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <Controller
                  control={form.control}
                  name="chatURL"
                  render={({ field }) => (
                    <Input placeholder=".gg server invite link" {...field} />
                  )}
                />
                <Button type="submit" disabled={editCommunity.isLoading}>
                  Link
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
}

export default Chat;
