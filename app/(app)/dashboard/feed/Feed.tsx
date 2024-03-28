import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { DialogDemo } from "./DialogCreateFeed";

import { feedFooterOptions, createNewPostText } from "./../constant";

function Feed({
	content,
	author,
	stats,
	firstFeed,
}: {
	content: string;
	author: { name: string; profilePic: string };
	stats: { Like: number; Comment: number; time: EpochTimeStamp };
	firstFeed: boolean;
}) {
	return (
		<div>
			<div className="flex justify-between items-start flex-col w-10/12 border-2 rounded border-black max-w-xl p-2">
				{/* Header */}
				<div className="p-1">
					<div className="flex items-center gap-2 h-20 w-20">
						<Avatar className="rounded-[10px]">
							<AvatarImage
								src={author.profilePic || "https://github.com/shadcn.png"}
								alt="@shadcn"
							/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<h3 className="text-sm font-bold">{author?.name}</h3>
					</div>
					{firstFeed ? null : (
						<p className="text-xs text-gray-400">
							{stats.time / 10000000000} ago
						</p>
					)}
				</div>
				{/* Content */}
				<section className={`feed-content ${firstFeed ? '': 'border-b-2'} py-3 px-1 w-full`}>
					{firstFeed ? (
						<DialogDemo placeholder={createNewPostText}/>
					) : (
						<>
							<h3>Hello</h3>
							<p>{content}</p>
							<div className="self-end pt-6 flex">
								{feedFooterOptions.Like}
								<small>{`(${stats.Like})`}</small>
							</div>
						</>
					)}
				</section>
				{/* Footer */}
				{firstFeed ? null : (
					<section className="feed-footer p-1 flex w-fit gap-4">
						{Object.entries(feedFooterOptions).map(([key, value]) => (
							<div className="flex gap-1 items-center" key={key}>
								{/* Need to change the text from like to liked and increase or decrease counter */}
								{value}
								{key}
							</div>
						))}
					</section>
				)}
			</div>
		</div>
	);
}

export default Feed;