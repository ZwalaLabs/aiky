import CreateCommunity from "@/app/(app)/create-community/CreateCommunity";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <Image
          src="/Create.png"
          alt="CreateCommunity, enagage and monetize your communities."
          sizes="100vw"
          width="1000"
          height="1000"
          className="flex-1 object-cover"
          priority
        />

        <CreateCommunity />
      </div>
    </main>
  );
}
