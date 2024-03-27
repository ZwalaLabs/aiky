import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between px-10">
      <DropdownMenu>
        <DropdownMenuTrigger className="min-h-[3.5rem]">
          Community Name
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Others</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="min-h-[3.5rem]">
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
