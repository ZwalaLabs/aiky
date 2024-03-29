"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgePlus, LogOut, Minus } from "lucide-react";
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
import { useParams } from "next/navigation";

function Header({
  name,
  isAdmin = false,
}: {
  name: string;
  isAdmin?: boolean;
}) {
  const session = useSession();
  const params = useParams<{ communityId: string }>();

  return (
    <header className="flex h-[3.5rem] w-full items-center justify-between px-10">
      <NavigationMenu className="z-50">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl font-bold">
              {name}
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

      {isAdmin ? (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={`/dashboard/${params.communityId}/home`}>
                Admin View
              </Link>
            </NavigationMenuItem>

            <Minus />

            <NavigationMenuItem>
              <Link href={`/member/${params.communityId}/home`}>
                Member View
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : null}
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
