import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgePlus, LogOut } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="flex min-h-[3.5rem] items-center justify-between px-10">
      <DropdownMenu>
        <DropdownMenuTrigger>Community Name</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Others</DropdownMenuItem>
          <DropdownMenuItem>
            <Button className="flex items-center gap-2">
              <BadgePlus />
              Create Community
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              className="flex items-center gap-1"
              href="/api/auth/signout?callbackUrl=/"
            >
              <LogOut />
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default Header;
