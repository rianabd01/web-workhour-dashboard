import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job title is required" })
    .min(3, { message: "Job title at least 3 character" }),
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a job",
  }),
  salaryFrom: z.string({ required_error: "Salary from is required" }),
  salaryTo: z.string({ required_error: "Salary to is required" }),
  categoryId: z.string({ required_error: "You need to select category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required skills must be at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job description is required" })
    .min(10, { message: "Job description at least 10 character" }),
  responsibility: z
    .string({ required_error: "Responsibility is required" })
    .min(10, { message: "Responsibility at least 10 character" }),
  whoAYouAre: z
    .string({ required_error: "Who you are is required" })
    .min(10, { message: "Who you are at least 10 character" }),
  niceToHave: z
    .string({ required_error: "Nice to have is required" })
    .min(10, { message: "Nice to have  at least 10 character" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});
