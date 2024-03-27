import { Provider } from "@/app/(app)/Provider";
import { ReactNode } from "react";

export default async function DefaultLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Provider>{children}</Provider>;
}
