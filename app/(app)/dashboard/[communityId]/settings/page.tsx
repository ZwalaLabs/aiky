import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabSettings } from "./TabSettings";

function Page() {
	return (
		<>
			<div className="w-3/4 sm:w-9/10">
				<Card className="">
					<CardHeader>
						<CardTitle>Settings</CardTitle>
					</CardHeader>
					<CardContent>
						<TabSettings />
					</CardContent>
				</Card>
			</div>
		</>
	);
}

export default Page;
