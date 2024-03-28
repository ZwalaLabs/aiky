import { ReactNode } from "react";
import { Provider } from "@/app/(app)/Provider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";

export default async function CommunityLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Provider>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      {children}
    </Provider>
  );
}
