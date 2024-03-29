import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabSettings } from "./TabSettings";

function Page({ params }: { params: { communityId: string } }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary text-4xl">Settings</CardTitle>
      </CardHeader>

      <CardContent>
        <TabSettings params={params} />
      </CardContent>
    </Card>
  );
}

export default Page;
