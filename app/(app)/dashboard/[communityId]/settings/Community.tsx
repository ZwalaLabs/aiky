import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CommunityForm } from "./CommunityForm";

function Community() {
	return (
		<>
			<CardHeader>
				<CardTitle>Community Page</CardTitle>
				<CardDescription>
					This page shows non-members basic information about your community.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				<CommunityForm />
			</CardContent>
		</>
	);
}

export default Community;
