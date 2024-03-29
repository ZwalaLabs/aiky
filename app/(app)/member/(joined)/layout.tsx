import Header from "@/components/Layout/app/Header";
import { ReactNode } from "react";
import MemberSidebar from "./MemberSidebar";

export default async function MemberLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: { communityId: string };
}) {
  return (
    <>
      <Header name="hohoho" />

      <div className="flex">
        <MemberSidebar />

        <main className="no-scrollbar flex-[8_8_0%] overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  );
}
