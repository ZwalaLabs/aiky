import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CommunityForm } from "./CommunityForm";
import db from "@/db";
import { eq } from "drizzle-orm";
import { communities } from "@/db/schema";

async function Community({ params }: { params: { communityId: string } }) {
  const community = await db.query.communities.findFirst({
    where: eq(communities.id, params.communityId),
  });

  if (!community) return <div>Community not found</div>;

  return (
    <>
      <CardHeader>
        <CardTitle>Customize your community page</CardTitle>
        <CardDescription>
          This page shows non-members basic information about your community
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <CommunityForm initCommunity={community} />
      </CardContent>
    </>
  );
}

export default Community;
