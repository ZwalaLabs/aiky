import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

function JoinChatSideBar({ chatURL }: { chatURL: string }) {
  return (
    <aside className="p-4" style={{ height: "calc(100vh - 3.5rem)" }}>
      <h3 className="text-center text-2xl font-bold">Join Community Chat</h3>
      <div className="mt-4 flex items-center gap-2">
        <Image src="/discord.svg" alt="discord" width={200} height={100} />
        <Link href={chatURL}>
          <SquareArrowOutUpRight />
        </Link>
      </div>
    </aside>
  );
}

export default JoinChatSideBar;
