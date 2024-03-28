import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DialogDemo } from "./DialogCreateFeed";

import { createNewPostText, feedFooterOptions } from "../constant";

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
      <div className="flex w-10/12 max-w-xl flex-col items-start justify-between rounded border-2 border-black p-2">
        {/* Header */}
        <div className="p-1">
          <div className="flex h-20 w-20 items-center gap-2">
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
        <section
          className={`feed-content ${firstFeed ? "" : "border-b-2"} w-full px-1 py-3`}
        >
          {firstFeed ? (
            <DialogDemo placeholder={createNewPostText} />
          ) : (
            <>
              <h3>Hello</h3>
              <p>{content}</p>
              <div className="flex self-end pt-6">
                {feedFooterOptions.Like}
                <small>{`(${stats.Like})`}</small>
              </div>
            </>
          )}
        </section>
        {/* Footer */}
        {firstFeed ? null : (
          <section className="feed-footer flex w-fit gap-4 p-1">
            {Object.entries(feedFooterOptions).map(([key, value]) => (
              <div className="flex items-center gap-1" key={key}>
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
