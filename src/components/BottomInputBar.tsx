"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  message: z.string().min(2, {
    message: "chat message can't be empty",
  }),
});

interface Props {}

const BottomInputBar = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="absolute px-4 py-2  bottom-0 w-full left-1/2 -translate-x-1/2">
      <div className="flex  items-center bg-accent/70  w-full h-fit p-2  rounded-3xl">
        <div>
          <Image src="/icons/file.svg" width={24} height={24} alt="send" />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full ">
            <div className="w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {/* TODO: convet Input to text area */}
                      <Input
                        className="w-full  border-none drop-shadow-none shadow-none custom-scrollbar focus-visible:ring-0 outline-none focus:outline-none  bg-transparent"
                        placeholder="Type a message"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              className="p-2  rounded-full"
            >
              <Image
                src="/icons/arrow-up.svg"
                width={24}
                height={24}
                className="invert dark:invert-0"
                alt="send"
              />
            </Button>
          </form>
        </Form>
      </div>
      <div className=" p-2 text-center text-xs  ">
        <span>LateGPT can make mistakes. Check important info.</span>
      </div>
    </div>
  );
};

export default BottomInputBar;
