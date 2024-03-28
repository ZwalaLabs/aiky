import { ReactNode } from "react";
import { Provider } from "@/app/(app)/[communityId]/Provider";

export default async function CommunityLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Provider>{children}</Provider>;
}
