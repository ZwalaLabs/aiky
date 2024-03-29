import { CardContent, CardTitle } from "@/components/ui/card";
import Member from "./Member";
import db from "@/db";
import { eq } from "drizzle-orm";
import { communities } from "@/db/schema";

async function Members({ params }: { params: { communityId: string } }) {
  const community = await db.query.communities.findFirst({
    where: eq(communities.id, params.communityId),
    with: {
      members: {
        with: {
          userId: true,
        },
      },
    },
  });

  if (!community) return <div>Community not found</div>;

  const { members } = community;

  return (
    <div>
      <CardTitle className="px-2 py-4 text-3xl">Members</CardTitle>
      <small className="px-4 text-slate-400">
        Total Count: {members.length}
      </small>
      <CardContent className="px-2 py-4">
        {members.map((member) => (
          <Member key={member.userId.id} member={member.userId} />
        ))}
      </CardContent>
    </div>
  );
}

export default Members;
