"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { CalendarFold, Home, StretchHorizontal, Users } from "lucide-react";
import Link from "next/link";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import { usePathname } from "next/navigation";

function MemberSidebar() {
  const pathname = usePathname();

  return (
    <aside className="p-6" style={{ height: "calc(100vh - 3.5rem)" }}>
      <NavigationMenu className="flex-col items-start gap-2">
        <NavigationMenuSub>
          <Link href="home">
            <NavigationMenuList className="w-40 cursor-pointer flex-col items-start gap-4 rounded-[20px] p-3 hover:bg-gray-300">
              <NavigationMenuItem
                className={`flex items-center gap-4 text-sm ${
                  pathname.includes("home")
                    ? "text-primary font-semibold"
                    : "text-gray-400"
                }`}
              >
                <Home />
                Home
              </NavigationMenuItem>
            </NavigationMenuList>
          </Link>
        </NavigationMenuSub>

        <NavigationMenuSub>
          <Link href="events">
            <NavigationMenuList className="w-40 cursor-pointer flex-col items-start gap-4 rounded-[20px] p-3 hover:bg-gray-300">
              <NavigationMenuItem
                className={`flex items-center gap-4 text-sm ${
                  pathname.includes("events")
                    ? "text-primary font-semibold"
                    : "text-gray-400"
                }`}
              >
                <CalendarFold />
                Events
              </NavigationMenuItem>
            </NavigationMenuList>
          </Link>
        </NavigationMenuSub>

        <NavigationMenuSub>
          <Link href="products">
            <NavigationMenuList className="w-40 cursor-pointer flex-col items-start gap-4 rounded-[20px] p-3 hover:bg-gray-300">
              <NavigationMenuItem
                className={`flex items-center gap-4 text-sm ${
                  pathname.includes("products")
                    ? "text-primary font-semibold"
                    : "text-gray-400"
                }`}
              >
                <StretchHorizontal />
                Products
              </NavigationMenuItem>
            </NavigationMenuList>
          </Link>
        </NavigationMenuSub>

        <NavigationMenuSub>
          <Link href="members">
            <NavigationMenuList className="w-40 cursor-pointer flex-col items-start gap-4 rounded-[20px] p-3 hover:bg-gray-300">
              <NavigationMenuItem
                className={`flex items-center gap-4 text-sm ${
                  pathname.includes("members")
                    ? "text-primary font-semibold"
                    : "text-gray-400"
                }`}
              >
                <Users />
                Members
              </NavigationMenuItem>
            </NavigationMenuList>
          </Link>
        </NavigationMenuSub>

        {/*<NavigationMenuSub>*/}
        {/*  <Link href="challenges">*/}
        {/*    <NavigationMenuList className="w-40 cursor-pointer flex-col items-start gap-4 rounded-[20px] p-3 hover:bg-gray-300">*/}
        {/*      <NavigationMenuItem*/}
        {/*        className={`flex items-center gap-4 text-sm ${*/}
        {/*          pathname.includes("challenges")*/}
        {/*            ? "text-primary font-semibold"*/}
        {/*            : "text-gray-400"*/}
        {/*        }`}*/}
        {/*      >*/}
        {/*        <Swords />*/}
        {/*        Challenges*/}
        {/*      </NavigationMenuItem>*/}
        {/*    </NavigationMenuList>*/}
        {/*  </Link>*/}
        {/*</NavigationMenuSub>*/}
      </NavigationMenu>
    </aside>
  );
}

export default MemberSidebar;
