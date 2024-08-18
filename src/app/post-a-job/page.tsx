"use client";
import { jobFormSchema } from "@/lib/form-schema";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FieldInput from "@/components/organism/FieldInput";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { JOBTYPES } from "@/constants";
import { useRouter } from "next/navigation";

interface PostAJobPage {}

const PostAJob: FC<PostAJobPage> = ({}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });

  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };

  return (
    <div>
      <div
        className="inline-flex items-center gap-5 hover:text-primary cursor-pointer"
        onClick={() => router.push("/")}
      >
        <ArrowLeft className="w-7 h-7" />
        <div className="text-lg font-semibold">Post Job</div>
      </div>
      <div className="my-5">
        <div className="text-lg font-semibold">Basic information</div>
        <div className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, harum?
        </div>
      </div>

      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 space-y-6 pt-6"
        >
          <FieldInput title="Job title" subtitle="This is subtitle for input">
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e. g. Frontend Developer"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription>at least 3 roles</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Choose a Job Type"
            subtitle="Job type to inform job seeker needs"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup defaultValue="option-one">
                      {JOBTYPES.map((item: string, index: number) => (
                        <div
                          className="flex items-center space-x-2"
                          key={index}
                        >
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item}>{item}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput title="Job range" subtitle="This is subtitle for input">
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="$10"
                        {...field}
                        className="w-[200px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <span>To</span>

              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="$10000"
                        {...field}
                        className="w-[200px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput
            title="Job categories"
            subtitle="This is subtitle for input"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job categories</FormLabel>
                  <Select>
                    <SelectTrigger className="w-[450px]">
                      <SelectValue placeholder="Select job categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </FieldInput>
        </form>
      </Form>
    </div>
  );
};

export default PostAJob;
