"use client";

import { Button } from "@/components/ui/button";
import { trpc } from "@/app/(app)/_trpc/client";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function JoinCommunity({ communityId }: { communityId: string }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("join");

  const router = useRouter();

  const addMember = trpc.member.add.useMutation();

  function handleJoin() {
    addMember.mutate(
      { communityId },
      {
        onSuccess({ message }) {
          toast.success(message);
        },
        onError({ message }) {
          if (message === "UNAUTHORIZED")
            router.push(
              `/api/auth/signin?callbackUrl=/${communityId}?join=true`,
            );

          console.log(message);
        },
        onSettled() {
          router.refresh();
        },
      },
    );
  }

  useEffect(() => {
    if (search === "true") handleJoin();
  }, []);

  return <Button onClick={handleJoin}>Join</Button>;
}

export default JoinCommunity;
