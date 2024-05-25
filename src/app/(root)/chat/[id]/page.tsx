"use client";
import BottomInputBar from "@/components/BottomInputBar";
import React, { useEffect } from "react";
import { useChat } from "ai/react";
import Markdown from "@/components/markdown";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/providers/user-store-provider";

const Page = () => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    console.log({ user });
    if (!user) {
      router.push("/login");
    }
  }, []);

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
    <main className="flex relative  h-[calc(100svh-56px)] py-4 w-full gap-12 mx-auto max-w-5xl flex-col items-center  px-2 ">
      {error && (
        <div className="fixed top-0 left-0 w-full p-4 text-center text-white bg-red-500">
          {error.message}
        </div>
      )}
      <div className="  text-wrap break-all w-full h-[calc(100%-90px)] custom-scrollbar  overflow-auto  relative   sm:px-2">
        {messages.map((message, index) => (
          <div key={index} className="break-words text-wrap flex flex-col  ">
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
      </div>

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
