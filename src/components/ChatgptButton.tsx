import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";

const ChatgptButton = () => {
  const onLogout = async () => {};
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="p-2 hover:bg-accent/50 rounded-lg opacity-60 focus:bg-accent/50  text-lg  flex items-center">
          ChatGPT
          <Image
            src="/icons/down-chevron.svg"
            width={16}
            height={16}
            alt="down-chevron"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={2}
        className="w-fit rounded-2xl sm:ml-56  p-2"
      >
        <DropdownMenuItem className="rounded-lg justify-center items-center focus:bg-accent/50 flex gap-4 cursor-pointer px-2 py-3">
          <div className="w-full flex gap-2 ">
            <Image
              className=" bg-accent/70 rounded-full w-fit p-2"
              src="/icons/sparkle-outline.svg"
              width={20}
              height={20}
              alt="sparkle"
            />

            <div>
              <p className="text-xs text-left ">ChatGPT Plus</p>
              <p className="text-xs opacity-60">Our Smartest model & more</p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="rounded-full hover:bg-accent h-7  px-4"
          >
            Upgrade
          </Badge>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg justify-center items-center focus:bg-accent/50 flex gap-4 cursor-pointer px-2 py-3">
          <div className="w-full flex gap-2 ">
            <Image
              className=" bg-accent/70 rounded-full w-fit p-2"
              src="/icons/everyday-chatgpt.svg"
              width={20}
              height={20}
              alt="sparkle"
            />

            <div>
              <p className="text-xs text-left ">ChatGPT</p>
              <p className="text-xs opacity-60">Great for everyday tasks </p>
            </div>
          </div>
          <Image
            src="/icons/right-tick.svg"
            width={20}
            height={20}
            alt="right-tick-icon"
          />
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="rounded-lg justify-center items-center focus:bg-accent/50 flex gap-4 cursor-pointer px-2 py-1">
          <div className="w-full items-center flex gap-2 ">
            <Image
              className=" rounded-full w-fit p-2"
              src="/icons/temp-chat.svg"
              width={20}
              height={20}
              alt="sparkle"
            />
            <p className="text-xs text-left ">Temporary Chat</p>
          </div>
          <Switch />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChatgptButton;
