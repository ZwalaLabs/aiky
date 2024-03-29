"use client";

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

function CommunityLink({ URL }: { URL: string }) {
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(`https://aiky.vercel.app/${URL}`).then(() => {
      toast.success("Link copied to clipboard!");
    });
  };

  return (
    <Button onClick={copyLinkToClipboard} variant="ghost">
      <Copy />
    </Button>
  );
}

export default CommunityLink;
