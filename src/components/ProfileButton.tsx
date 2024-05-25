"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";
import { useUserStore } from "@/providers/user-store-provider";

const ProfileButton = () => {
  const logout = useUserStore((state) => state.logout);
  const router = useRouter();
  const onLogout = async () => {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("Failed to log out");
    }

    logout();
    router.push("/login");

    // revalidatePath("/", "layout");
    // redirect("/login");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex  items-center gap-4 px-4 outline-none">
        <Avatar>
          <AvatarImage src={"/avatar.png"} />
          <AvatarFallback className="dark:invert">RC</AvatarFallback>
        </Avatar>
        <p className="sm:hidden">Rajesh Choudhary</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={2} className="w-72 rounded-2xl mr-2 p-2">
        <DropdownMenuItem className="rounded-lg focus:bg-accent/50 flex gap-2 cursor-pointer p-3">
          <Image
            className=" dark:invert  opacity-60 "
            src="/icons/costumize.svg"
            width={24}
            height={24}
            alt="costumize-icon"
          />
          Costumize ChatGPT
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg flex focus:bg-accent/50 gap-2 cursor-pointer p-3">
          <Image
            className=" dark:invert opacity-60 "
            src="/icons/settings.svg"
            width={24}
            height={24}
            alt="settings-icon"
          />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator className="dark:invert dark:opacity-10" />
        <DropdownMenuItem
          className="rounded-lg flex gap-2 focus:bg-accent/50 cursor-pointer p-3"
          onClick={onLogout}
        >
          <Image
            className="dark:invert  opacity-60 "
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
