import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import db from "@/db";
import { eq } from "drizzle-orm";
import { communities } from "@/db/schema";
import { BadgeDollarSign, Users } from "lucide-react";
import Image from "next/image";

async function Page({ params }: { params: { communityId: string } }) {
  const community = await db.query.communities.findFirst({
    where: eq(communities.id, params.communityId),
    with: {
      members: true,
      userId: true,
    },
  });

  if (!community) return <div>Community not found</div>;

  const { name, description, logo, coverPhoto, members, userId } = community;
  const { name: userName, image } = userId;

  return (
    <main>
      <Card className="mx-auto flex max-w-3xl flex-col justify-center border-0">
        {/* coverPhoto */}
        <Image
          src={coverPhoto ?? "/backupCover.avif"}
          alt={description}
          width={1920}
          height={1080}
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
            <Button>Go to Member Portal</Button>
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
        </div>
      </Card>
    </main>
  );
}

export default Page;
