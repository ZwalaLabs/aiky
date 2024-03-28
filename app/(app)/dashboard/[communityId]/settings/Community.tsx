import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CommunityForm } from "./CommunityForm";
import { SelectCommunity } from "@/db/schema";

async function Community({
  initCommunity,
}: {
  initCommunity: SelectCommunity;
}) {
  return (
    <>
      <CardHeader>
        <CardTitle>Customize your community page</CardTitle>
        <CardDescription>
          This page shows non-members basic information about your community
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <CommunityForm initCommunity={initCommunity} />
      </CardContent>
    </>
  );
}

export default Community;
