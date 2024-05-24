import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

interface Props {}

const BottomInputBar = (props: Props) => {
  return (
    <div className="absolute px-4 py-2  bottom-0 w-full left-1/2 -translate-x-1/2">
      <div className="flex items-center bg-accent/70  w-full h-fit p-2  rounded-3xl">
        <div>
          <Image src="/icons/file.svg" width={24} height={24} alt="send" />
        </div>
        {/* TODO: convet Input to text area */}
        <Input
          className="flex-1 border-none drop-shadow-none shadow-none custom-scrollbar focus-visible:ring-0 outline-none focus:outline-none  bg-transparent"
          placeholder="Type a message"
        />
        <Button className="p-2 rounded-full">
          <Image
            src="/icons/arrow-up.svg"
            width={24}
            height={24}
            className="invert dark:invert-0"
            alt="send"
          />
        </Button>
      </div>
      <div className=" p-2 text-center text-xs  ">
        <span>LateGPT can make mistakes. Check important info.</span>
      </div>
    </div>
  );
};

export default BottomInputBar;
