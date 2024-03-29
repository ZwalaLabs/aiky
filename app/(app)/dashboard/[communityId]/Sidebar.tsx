"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Home, Megaphone, Settings } from "lucide-react";
import Link from "next/link";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import { usePathname } from "next/navigation";

function CommunitySidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed w-56 p-6"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >
      <NavigationMenu className="flex-col items-start gap-12">
        <NavigationMenuSub>
          <NavigationMenuList className="flex-col items-start gap-4">
            <h3 className="-mb-2 text-xs font-bold text-gray-400/50">HOME</h3>
            <NavigationMenuItem
              className={`flex items-center gap-2 ${
                pathname.includes("home")
                  ? "text-primary font-semibold"
                  : "text-gray-400"
              }`}
            >
              <Home />
              <Link href="home">Home</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuSub>

        <NavigationMenuSub>
          <NavigationMenuList className="flex-col items-start gap-4">
            <h3 className="-mb-2 text-xs font-bold text-gray-400/50">ENGAGE</h3>
            <NavigationMenuItem
              className={`flex items-center gap-2 ${
                pathname.includes("feed")
                  ? "text-primary font-semibold"
                  : "text-gray-400"
              }`}
            >
              <Megaphone />
              <Link href="feed">Feed</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuSub>

        <NavigationMenuSub>
          <NavigationMenuList className="flex-col items-start gap-4">
            <h3 className="-mb-2 text-xs font-bold text-gray-400/50">MANAGE</h3>
            <NavigationMenuItem
              className={`flex items-center gap-2 ${
                pathname.includes("settings")
                  ? "text-primary font-semibold"
                  : "text-gray-400"
              }`}
            >
              <Settings />
              <Link href="settings">Settings</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuSub>
      </NavigationMenu>
    </aside>
  );
}

export default CommunitySidebar;
