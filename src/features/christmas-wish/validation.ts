import { z } from "zod";

export const nameSchema = z.object({
  name: z.string().min(0).max(10),
});
