"use client";

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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useSession } from "next-auth/react";

function Header() {
  const session = useSession();

  return (
    <header className="flex min-h-[3.5rem] items-center justify-between px-10">
      <NavigationMenu className="z-50">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl font-bold">
              Community Name
            </NavigationMenuTrigger>

            <NavigationMenuContent className="flex flex-col gap-4">
              {/*<NavigationMenuLink>Others</NavigationMenuLink>*/}

              <NavigationMenuLink href="/create-community">
                <Button className="flex items-center gap-2">
                  <BadgePlus />
                  Create Community
                </Button>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session.data?.user?.image ?? "/jupiter.svg"} />
            <AvatarFallback>{session.data?.user?.name}</AvatarFallback>
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
