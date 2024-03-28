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

      <div className="flex">
        <Sidebar />

        <main className="flex-[8_8_0%]">{children}</main>
      </div>
    </>
  );
}
