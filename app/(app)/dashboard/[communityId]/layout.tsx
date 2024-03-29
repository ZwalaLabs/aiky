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

        <main className="no-scrollbar ml-60 w-full overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  );
}
