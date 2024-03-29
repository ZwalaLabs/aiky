import { Card, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import db from "@/db";
import { eq, or } from "drizzle-orm";
import { communities } from "@/db/schema";
import { BadgeDollarSign, Users } from "lucide-react";
import Image from "next/image";
import JoinCommunity from "@/app/(app)/[communityName]/JoinCommunity";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function Page({ params }: { params: { communityName: string } }) {
  const session = await auth();

  const community = await db.query.communities.findFirst({
    where: or(
      eq(communities.name, params.communityName),
      eq(communities.id, params.communityName),
    ),
    with: {
      members: true,
      userId: true,
    },
  });

  if (!community) return <div>Community not found</div>;

  const { id, name, description, logo, coverPhoto, members, userId } =
    community;
  const { name: userName, image } = userId;

  const isMember = members.some(
    (member) => member.userId === session?.user?.id,
  );

  return (
    <main className="mt-20">
      <Card className="mx-auto flex max-w-3xl flex-col justify-center border-0 px-5 md:px-0">
        {/* coverPhoto */}
        <Image
          src={coverPhoto ?? "/backupCover.avif"}
          alt={description}
          width={1920}
          height={1080}
          className="rounded-xl"
        />
        {/* Other Details */}
        <div className="-mt-10 rounded-b-[30px] bg-red-100 md:-mt-32">
          {/* Community details */}
          <div className="flex w-full justify-between p-6">
            <div>
              {/* Community Name */}
              <CardTitle className="flex items-center gap-2 py-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={logo || "/backupLogo.avif"} alt={name} />
                  <AvatarFallback>{name}</AvatarFallback>
                </Avatar>
                {name}
              </CardTitle>
              {/* Community Member */}
              <div className="flex gap-2 p-2">
                <Users />
                {members.length}
              </div>
              {/* Community Cost */}
              <div className="flex gap-2 p-2">
                <BadgeDollarSign />
                Free
              </div>
            </div>
            {isMember ? (
              <>
                <Button>
                  <Link href="/">Go to member portal</Link>
                </Button>
              </>
            ) : (
              <JoinCommunity communityId={id} />
            )}
          </div>
          <hr className="border-1 border-black" />
          {/* Community Host */}
          <div className="justify-between px-6 py-2">
            <small>Hosted by</small>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={image || "/jupiter.svg"}
                  alt={userName ?? "Host"}
                />
                <AvatarFallback>{userName}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{userName}</h3>
            </div>
          </div>

          {/*Description*/}
          <p className="text-center text-gray-500">{description}</p>
        </div>
      </Card>
    </main>
  );
}

export default Page;
