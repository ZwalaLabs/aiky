import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Chat() {
	return (
		<>
			<CardHeader>
				<CardTitle>Connect your chat</CardTitle>
			</CardHeader>
			<Card>
				<CardContent className="p-6">
					<img
						className="w-8 py-2"
						src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
						alt="discord"
					/>
					<CardTitle className="py-3">Discord</CardTitle>
					<CardDescription className="py-2">
						Connect your Discord server to your community to enable chat
						features.
					</CardDescription>
				</CardContent>
				<CardFooter>
					<Button className="w-full bg-blue-700">Connect Discord</Button>
				</CardFooter>
			</Card>
		</>
	);
}

export default Chat;
