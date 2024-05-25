"use client"
import BottomInputBar from "@/components/BottomInputBar";
import DemoCard from "@/components/DemoCard";
import { useChat } from "ai/react";
import Image from "next/image";

const demoCardData = [
  {
    src: "/icons/write.svg",
    alt: "send",
    color: "text-red-500",
    text: "Text inviting neighbors to barbecue",
  },
  {
    src: "/icons/plane.svg",
    alt: "send",
    color: "bg-blue-500",
    text: "Write a letter to the editor of a newspaper",
  },
  {
    src: "/icons/box.svg",
    alt: "send",
    color: "bg-green-500",
    text: "Make a poster for a lost pet or item",
  },
  {
    src: "/icons/bag.svg",
    alt: "send",
    color: "bg-yellow-500",
    text: "Shopping list for a party",
  },
];

export default function Home() {
  const { input, isLoading, handleSubmit, handleInputChange } = useChat();
  return (
    <main className="flex relative  h-[calc(100svh-56px)] py-20 w-full gap-12 max-w-3xl  mx-auto flex-col items-center ">
      <Image src="/icons/chatgpt-logo.svg" width={72} height={72} alt="logo" />
      <div className="flex flex-wrap  gap-4">
        {demoCardData.map((data, index) => (
          <DemoCard key={index} index={index} {...data} />
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
}
