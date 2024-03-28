import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

import { feedFooterOptions, createNewPostText } from "./../constant";
import { useSession } from "next-auth/react";

function Feed({
	title,
	content,
	likes,
	time,
	name,
	image,
}: {
	content: string;
	title: string;
	likes: Array<string>;
	time: string;
	name: string;
	image: string;
}) {
	const session = useSession();

	return (
		<>
			<div className="flex justify-between items-start flex-col border-2 rounded border-black p-2">
				{/* Header */}
				<div className="p-1">
					<div className="flex h-12 items-center gap-3">
						<Avatar>
							<AvatarImage
								className="rounded-full h-10"
								src={image ?? "jupiter.svg"}
							/>
							<AvatarFallback>{name}</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<h3 className="">{name}</h3>
							<small className="text-xs text-gray-400">
								{parseInt(time, 10) / 10000000000} ago
							</small>
						</div>
					</div>
				</div>
				{/* Content */}
				<section className="feed-content border-b-2 py-3 px-1 w-full">
					<>
						<h3>{title}</h3>
						<p>{content}</p>
                        {console.log(likes)}
						{likes.length ? (
							<div className="self-end pt-6 flex">
								{feedFooterOptions.Like}
								<small>{`(${likes[0]})`}</small>
							</div>
						) : null}
					</>
				</section>
				{/* Footer */}
				<section className="feed-footer p-1 flex w-fit gap-4">
					{Object.entries(feedFooterOptions).map(([key, value]) => (
						<div className="flex gap-1 items-center" key={key}>
							{/* Need to change the text from like to liked and increase or decrease counter */}
							{value}
							{key}
						</div>
					))}
				</section>
			</div>
		</>
	);
}

export default Feed;
