import { z } from "zod";

export const createCommunityInput = z.object({
  name: z
    .string()
    .min(2, {
      message: "Form name must be at least 2 characters.",
    })
    .max(25, {
      message: "Form name can be at most 25 characters.",
    }),
  description: z
    .string()
    .min(5, {
      message: "Form description must be at least 2 characters.",
    })
    .max(100, {
      message: "Form description can be at most 100 characters.",
    }),
});
