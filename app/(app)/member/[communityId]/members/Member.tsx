import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SelectUser } from "@/db/schema";

function Member({ member }: { member: SelectUser }) {
  const { name, image, email } = member;

  return (
    <div className="flex w-[600px] items-center gap-4 px-2 py-6">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage
            className="h-10 rounded-full"
            src={image ?? "/jupiter.svg"}
          />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div>
          <h5 className="py-2">{name}</h5>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default Member;
