"use client";
import BottomInputBar from "@/components/BottomInputBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { useChat } from "ai/react";
import Markdown from "@/components/markdown";

const Page = () => {
  const {
    input,
    data,
    isLoading,
    error,
    setInput,
    handleSubmit,
    handleInputChange,
    messages,
    setMessages,
    reload,
    stop,
  } = useChat();

  return (
    <main className="flex relative  h-[calc(100svh-56px)] py-4 w-full gap-12 max-w-5xl  mx-auto flex-col items-center  px-2 ">
      {error && (
        <div className="fixed top-0 left-0 w-full p-4 text-center text-white bg-red-500">
          {error.message}
        </div>
      )}
      <ScrollArea className=" overflow-x-scroll break-all w-full h-[calc(100%-90px)] relative rounded-2xl  p-2">
        {messages.map((message, index) => (
          <div key={index} className="break-words  flex flex-col  ">
            <div
              className={`${
                message.role === "user" ? "bg-accent self-end" : ""
              } p-2 rounded-2xl`}
            >
              {message.role == "user" ? (
                message.content
              ) : (
                <Markdown content={message.content} />
              )}
            </div>
          </div>
        ))}
      </ScrollArea>

      <BottomInputBar
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isLoading={isLoading}
      />
    </main>
  );
};

export default Page;
