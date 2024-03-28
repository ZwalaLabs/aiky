import Header from "@/components/Layout/app/Header";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default async function CommunityLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: { communityId: string };
}) {
  return (
    <>
      <Header />

      <div className="flex max-h-[600px]">
        <Sidebar />

        <main className="flex-[8_8_0%] overflow-y-scroll no-scrollbar">{children}</main>
      </div>
    </>
  );
}
