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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface PostAJobPage {}

const PostAJob: FC<PostAJobPage> = ({}) => {
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
      <div className="inline-flex items-center gap-5 hover:text-primary cursor-pointer">
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
                      placeholder="halo"
                      {...field}
                      className="w-[500px]"
                    />
                  </FormControl>
                  <FormMessage />
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
