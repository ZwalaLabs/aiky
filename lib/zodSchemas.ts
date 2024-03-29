import { z } from "zod";
import { communityTypeValues } from "@/lib/constants";

const communityType = z.enum(communityTypeValues);

export const createCommunityInput = z.object({
  name: z
    .string()
    .min(2, {
      message: "Form URL must be at least 2 characters.",
    })
    .max(25, {
      message: "Form URL can be at most 25 characters.",
    }),
  description: z.string().min(5, {
    message: "Form description must be at least 5 characters.",
  }),
  type: communityType,
});

export const editCommunityInput = z.object({
  communityId: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  publicURL: z.string().optional(),
  chatURL: z.string().optional(),
  logo: z.string().optional(),
  coverPhoto: z.string().optional(),
});

export const doByCommunityId = z.object({
  communityId: z.string(),
});

export const doByPostId = z.object({
  postId: z.string(),
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
