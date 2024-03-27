import Sidebar from "@/app/(app)/dashboard/Sidebar";

function Page() {
  return (
    <>
      <Sidebar />
      <main
        className="ml-80 mt-[3.5rem] flex items-center justify-center px-8"
        style={{
          height: "calc(100vh - 3.5rem)",
        }}
      >
        NOpe
      </main>
    </>
  );
}

export default Page;
