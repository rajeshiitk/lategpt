"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const BottomInputBar = ({
  handleSubmit,
  input,
  handleInputChange,
  isLoading,
}: Props) => {
  // using useChat from vercel ai

  return (
    <div className="absolute px-4 py-2  bottom-0 w-full left-1/2 -translate-x-1/2">
      <div className="flex  items-center bg-accent/70  w-full h-fit p-2  rounded-3xl">
        <div>
          <Image src="/icons/file.svg" width={24} height={24} alt="send" />
        </div>
        <form onSubmit={handleSubmit} className="flex w-full ">
          <div className="w-full">
            {/* TODO: convet Input to text area */}
            <Input
              value={input}
              onChange={handleInputChange}
              className="w-full  border-none drop-shadow-none shadow-none custom-scrollbar focus-visible:ring-0 outline-none focus:outline-none  bg-transparent"
              placeholder="Type a message"
            />
          </div>
          <Button
            disabled={input === "" || isLoading}
            type="submit"
            className="p-2  rounded-full"
          >
            <Image
              src="/icons/disabled.svg"
              width={24}
              height={24}
              className={`invert dark:invert-0 ${
                isLoading ? "block" : "hidden"
              }`}
              alt="send"
            />
            <Image
              src="/icons/arrow-up.svg"
              width={24}
              height={24}
              className={`invert  dark:invert-0 ${
                isLoading ? "hidden" : "block"
              }`}
              alt="send"
            />
          </Button>
        </form>
      </div>
      <div className=" p-2 text-center text-xs  ">
        <span>LateGPT can make mistakes. Check important info.</span>
      </div>
    </div>
  );
};

export default BottomInputBar;
