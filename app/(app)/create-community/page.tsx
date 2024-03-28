import CreateForm from "@/app/(app)/create-community/CreateForm";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <Image
          src="/Create.png"
          alt="Create, enagage and monetize your communities."
          sizes="100vw"
          width="1000"
          height="1000"
          className="flex-[100%] object-cover"
          priority
        />
        <CreateForm />
      </div>
    </main>
  );
}
