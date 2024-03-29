import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { SelectPost, SelectUser } from "@/db/schema";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { trpc } from "@/app/(app)/_trpc/client";
import { formatDistanceToNow } from "date-fns";
import toast from "react-hot-toast";

function Feed({ post }: { post: SelectPost & { userId: SelectUser } }) {
  const session = useSession();

  const trpcUtils = trpc.useUtils();

  const likePost = trpc.post.like.useMutation();

  const { title, content, likes, timestamp, userId } = post;
  const { name, image } = userId;

  const isLiked = likes.includes(session?.data?.user?.id ?? "");

  function handleLike() {
    likePost.mutate(
      { postId: post.id },
      {
        onSuccess: () => {
          trpcUtils.post.getAll.invalidate();
        },
        onError: ({ message }) => {
          toast.error(message);
        },
      },
    );
  }

  return (
    <div className="flex flex-col items-start justify-between p-2">
      {/* Header */}
      <div className="p-1">
        <div className="flex h-12 items-center gap-3">
          <Avatar>
            <AvatarImage
              className="h-10 rounded-full"
              src={image ?? "/jupiter.svg"}
            />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="">{name}</h3>
            <p className="text-xs text-gray-400">
              {formatDistanceToNow(timestamp, {
                addSuffix: true,
                includeSeconds: true,
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="feed-content w-full border-b-2 px-1 py-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{content}</p>

        <div className="mt-3 flex items-center gap-2 self-end">
          <Button
            variant="ghost"
            className={`p-0 hover:text-red-600 ${isLiked ? "text-red-600" : ""}`}
            onClick={handleLike}
          >
            <Heart className={`${isLiked ? "fill-red-600" : ""}`} />
          </Button>
          <p>{likes.length}</p>
        </div>
      </section>
    </div>
  );
}

export default Feed;
