"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

type Timeline = {
  label: string;
  timelines: {
    title: string;
    href: string;
  }[];
};

const timelineData: Timeline[] = [
  {
    label: "Today",
    timelines: [
      {
        href: "mindcase-study",
        title: "MindCase Study",
      },
      {
        href: "okr-tracker",
        title: "OKR Tracker",
      },
      {
        href: "image-editor and video-maker",
        title: "Image editor",
      },
      {
        href: "video-maker",
        title: "Video maker",
      },
      {
        href: "audio-mixer",
        title: "Audio mixer",
      },
    ],
  },
  {
    label: "Yesterday",
    timelines: [
      {
        href: "article-editor",
        title: "Article editor",
      },
      {
        href: "chart-generator",
        title: "Chart generator and diagram creator",
      },
      {
        href: "diagram-creator",
        title: "Diagram creator",
      },
      {
        href: "calendar-planner",
        title: "Calendar planner",
      },
      {
        href: "task-tracker",
        title: "Task tracker",
      },
    ],
  },
  {
    label: "Last Week",
    timelines: [
      {
        href: "code-editor",
        title: "Code editor",
      },
      {
        href: "presentation-builder",
        title: "Presentation builder and slideshow maker",
      },
      {
        href: "music-composer",
        title: "Music composer",
      },
      {
        href: "notebook-app",
        title: "Notebook app",
      },
      {
        href: "game-designer",
        title: "Game designer and game maker",
      },
    ],
  },
  {
    label: "Last Month",
    timelines: [
      {
        href: "tag-generator",
        title: "Tag generator and ransom note maker",
      },
      {
        href: "title-generator",
        title: "Title generator",
      },
      {
        href: "image-editor and video-maker",
        title: "Image editor",
      },
      {
        href: "video-maker",
        title: "Video maker",
      },
      {
        href: "audio-mixer",
        title: "Audio mixer",
      },
    ],
  },
  {
    label: "Last Year",
    timelines: [
      {
        href: "tag-generator",
        title: "Tag generator and ransom note maker",
      },
      {
        href: "title-generator",
        title: "Title generator",
      },
      {
        href: "image-editor and video-maker",
        title: "Image editor",
      },
      {
        href: "video-maker",
        title: "Video maker",
      },
      {
        href: "audio-mixer",
        title: "Audio mixer",
      },
    ],
  },
  {
    label: "Last Decade",
    timelines: [
      {
        href: "tag-generator",
        title: "Tag generator and ransom note maker",
      },
      {
        href: "title-generator",
        title: "Title generator",
      },
      {
        href: "image-editor and video-maker",
        title: "Image editor",
      },
      {
        href: "video-maker",
        title: "Video maker",
      },
      {
        href: "audio-mixer",
        title: "Audio mixer",
      },
    ],
  },
  {
    label: "Last Century",
    timelines: [
      {
        href: "tag-generator",
        title: "Tag generator and ransom note maker",
      },
      {
        href: "title-generator",
        title: "Title generator",
      },
      {
        href: "image-editor and video-maker",
        title: "Image editor",
      },
      {
        href: "video-maker",
        title: "Video maker",
      },
      {
        href: "audio-mixer",
        title: "Audio mixer",
      },
    ],
  },
];

export function Icon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className=" hover:bg-[#ececec]  opacity-60 p-2.5 rounded-lg ">
      <Image src={src} width={24} height={24} alt={alt} />
    </div>
  );
}

export default function Sidebar({ isSidebarOpen, toggleSidebar }: Props) {
  return (
    <div
      className={cn("h-[calc(100svh)] bg-sidebar relative  transition-all ", {
        "-translate-x-full": !isSidebarOpen,
        "w-full  max-w-[244px]": isSidebarOpen,
      })}
    >
      {isSidebarOpen && (
        <div className={cn("h-[calc(100svh)]  w-full  pl-1 pr-2 pt-20    ")}>
          {/* new chat btn */}
          <div className="absolute top-2 left-0 pl-2 pr-2 h-12 w-full ">
            <div className="flex   justify-between w-full  items-center  rounded-lg transition-all ">
              <button onClick={toggleSidebar}>
                <Icon src="/icons/sidebar.svg" alt="chat" />
              </button>
              <button>
                <Icon src="/icons/new-chat.svg" alt="chat" />
              </button>
            </div>
          </div>

          {/* timeles */}
          <div className="w-full h-[calc(100svh-130px)] custom-scrollbar flex flex-col px-2 gap-2 overflow-auto">
            {timelineData.map((d, i) => (
              <Timeline key={i} label={d.label} timelines={d.timelines} />
            ))}
          </div>
          <div className="h-12 p-1">
            <Button variant="ghost" className="w-full flex gap-2 h-full">
              <Image
                className=" rounded-full border p-1"
                src="/icons/sparkle.svg"
                width={24}
                height={24}
                alt="sparkle"
              />

              <div>
                <p className="text-xs text-left ">Upgrade plan</p>
                <p className="text-xs opacity-60">
                  Get GPT-4, DALL·E, and more
                </p>
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Timeline(props: Timeline) {
  const pathName = usePathname();

  return (
    <div className="w-full  flex flex-col  ">
      <p className="text-xs opacity-70 font-medium px-2 py-1">{props.label}</p>

      {props.timelines.map((d, i) => (
        <Link
          key={i}
          className={cn(
            "p-2 group ease-in-out duration-300  hover:bg-[#ececec] rounded-lg transition-all items-center text-sm w-full flex justify-between  ",
            { "": `/${d.href}` === pathName }
          )}
          href={d.href}
        >
          <div className="text-ellipsis justify-center items-center text-sm text-[#0d0d0d]   overflow-hidden w-[90%] whitespace-nowrap">
            {d.title}
          </div>
          <div className="  transition-all items-center hidden group-hover:flex ease-in-out duration-300 ">
            <Image
              src="/icons/three-dot.svg"
              width={16}
              height={16}
              alt="three-dot"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
