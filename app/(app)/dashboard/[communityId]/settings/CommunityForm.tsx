"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from "lucide-react";
import { SelectCommunity } from "@/db/schema";
import toast from "react-hot-toast";
import { trpc } from "@/app/(app)/_trpc/client";
import { useRouter } from "next/navigation";
import { UploadButton } from "@/components/utils/uploadthing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const communityFormSchema = z.object({
  logo: z.string(),
  name: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  publicURL: z.string().min(1, {
    message: "Public URL must be at least 1 character.",
  }),
  coverPhoto: z.string(),
});

export function CommunityForm({
  initCommunity,
}: {
  initCommunity: SelectCommunity;
}) {
  const router = useRouter();

  const editCommunity = trpc.community.edit.useMutation();

  const form = useForm<z.infer<typeof communityFormSchema>>({
    resolver: zodResolver(communityFormSchema),
    defaultValues: {
      logo: initCommunity.logo ?? "",
      name: initCommunity.name,
      publicURL: initCommunity.publicURL,
      description: initCommunity.description,
      coverPhoto: initCommunity.coverPhoto ?? "",
    },
  });

  function onSubmit(values: z.infer<typeof communityFormSchema>) {
    editCommunity.mutate(
      {
        ...values,
        communityId: initCommunity.id,
      },
      {
        onSuccess({ message }) {
          toast.success(message);
        },
        onError(err) {
          toast.error(err.message);
        },
        onSettled() {
          router.refresh();
        },
      },
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/*Public URL*/}
        <FormField
          control={form.control}
          name="publicURL"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Public URL</FormLabel>
              <div className="flex items-center gap-2">
                <span className="flex-3 text-lg font-bold">aiky.pro/</span>
                <FormControl>
                  <Input
                    placeholder="Enter Community URL"
                    {...field}
                    className="max-w-lg"
                  />
                </FormControl>
                <Copy
                  className="flex-3 ml-6 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://aiky.pro/${initCommunity.publicURL}`,
                    );

                    toast.success("Copied Link to clipboard");
                  }}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Community Image */}
        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Community Logo</FormLabel>

              <FormControl>
                <>
                  {!form.formState.dirtyFields.logo ? (
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        form.setValue("logo", res[0].url, {
                          shouldTouch: true,
                          shouldDirty: true,
                        });
                      }}
                      onUploadError={(error: Error) => {
                        console.log(`ERROR! ${error.message}`);
                      }}
                    />
                  ) : (
                    ""
                  )}
                  {initCommunity.logo || form.getValues("logo") ? (
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        src={initCommunity.logo || form.getValues("logo")}
                      />
                      <AvatarFallback>{initCommunity.name}</AvatarFallback>
                    </Avatar>
                  ) : null}
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Community Title */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Community Name" {...field} />
              </FormControl>
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter Community Description"
                  {...field}
                />
              </FormControl>
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
              <FormLabel>
                Cover Photo (Recommended size: 1920x1080 (16:9) and less than
                8MB)
              </FormLabel>
              <FormControl>
                <>
                  {!form.formState.dirtyFields.coverPhoto ? (
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        form.setValue("coverPhoto", res[0].url, {
                          shouldTouch: true,
                          shouldDirty: true,
                        });
                      }}
                      onUploadError={(error: Error) => {
                        console.log(`ERROR! ${error.message}`);
                      }}
                    />
                  ) : (
                    ""
                  )}
                  {initCommunity.coverPhoto || form.getValues("coverPhoto") ? (
                    <Image
                      src={
                        initCommunity.coverPhoto || form.getValues("coverPhoto")
                      }
                      alt={initCommunity.description}
                      width={1920}
                      height={1080}
                    />
                  ) : null}
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={editCommunity.isLoading || !form.formState.isDirty}
          className="text-lg font-bold"
        >
          Save
        </Button>
      </form>
    </Form>
  );
}
