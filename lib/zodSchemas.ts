import { z } from "zod";
import { communityTypeValues } from "@/lib/constants";

const communityType = z.enum(communityTypeValues);

export const createCommunityInput = z.object({
  name: z
    .string()
    .min(2, {
      message: "Form name must be at least 2 characters.",
    })
    .max(25, {
      message: "Form name can be at most 25 characters.",
    }),
  description: z.string().min(5, {
    message: "Form description must be at least 5 characters.",
  }),
  type: communityType,
});

export const getAllPostSchema = z.object({
  communityId: z.string(),
});

export const createPostSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(5, {
    message: "Content must be at least 5 characters.",
  }),
  communityId: z.string(),
});
