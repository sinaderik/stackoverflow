import { z } from "zod";


export const QuestionsSchema = z.object({
    title: z.string().min(5).max(130),
    explanation:z.string().min(50),
    tags:z.array(z.string().min(1).max(15)).min(1,{ message: "Must contain at least 1 tag" }).max(3,{message:"Do not exceed 3 tags"}),
  });