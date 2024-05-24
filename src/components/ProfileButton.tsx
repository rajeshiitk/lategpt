import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const ProfileButton = () => {
  const onLogout = async () => {};
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar>
          <AvatarImage src={"/avatar.png"} />
          <AvatarFallback>RC</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={2} className="w-72 rounded-2xl mr-2 p-2">
        <DropdownMenuItem className="rounded-lg focus:bg-accent/50 flex gap-2 cursor-pointer p-3">
          <Image
            className=" opacity-60 "
            src="/icons/costumize.svg"
            width={24}
            height={24}
            alt="costumize-icon"
          />
          Costumize ChatGPT
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg flex focus:bg-accent/50 gap-2 cursor-pointer p-3">
          <Image
            className=" opacity-60 "
            src="/icons/settings.svg"
            width={24}
            height={24}
            alt="settings-icon"
          />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="rounded-lg flex gap-2 focus:bg-accent/50 cursor-pointer p-3"
          onClick={onLogout}
        >
          <Image
            className=" opacity-60 "
            src="/icons/logout.svg"
            width={24}
            height={24}
            alt="logout-icon"
          />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
