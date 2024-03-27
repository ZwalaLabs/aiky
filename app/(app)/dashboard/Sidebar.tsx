"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Home, Megaphone, Settings } from "lucide-react";
import Link from "next/link";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";

function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-[3.5rem] w-72 overflow-y-auto p-4"
      style={{
        height: "calc(100vh - 3.5rem)",
      }}
    >
      <NavigationMenu className="flex-col items-start gap-12">
        <NavigationMenuSub>
          <NavigationMenuList className="flex-col items-start gap-4">
            <h3 className="-mb-1 text-xs font-bold text-gray-400/50">HOME</h3>
            <NavigationMenuItem className="flex items-center gap-2 text-gray-400">
              <Home />
              <Link href="#">Home</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuSub>

        <NavigationMenuSub>
          <NavigationMenuList className="flex-col items-start gap-4">
            <h3 className="-mb-1 text-xs font-bold text-gray-400/50">ENGAGE</h3>
            <NavigationMenuItem className="flex items-center gap-2 text-gray-400">
              <Megaphone />
              <Link href="#">Feed</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuSub>

        <NavigationMenuSub>
          <NavigationMenuList className="flex-col items-start gap-4">
            <h3 className="-mb-1 text-xs font-bold text-gray-400/50">MANAGE</h3>
            <NavigationMenuItem className="flex items-center gap-2 text-gray-400">
              <Settings />
              <Link href="#">Settings</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuSub>
      </NavigationMenu>
    </aside>
  );
}

export default Sidebar;
