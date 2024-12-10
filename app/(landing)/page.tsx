import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Landing() {
  return (
    <div className="flex flex-col">
      <header className="fixed flex h-14 w-full items-center px-4 lg:px-6">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#features"
          >
            Features
          </Link>
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="ab">
           About
           </Link> */}
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#about"
          >
            About
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section
          id="home"
          className="min-h-screen w-full py-12 md:py-24 lg:py-32 xl:py-48"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-12 py-4">
                <h1 className="rounded-2xl bg-primary p-3 text-3xl font-black tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-8xl">
                  Monetize your Community
                </h1>
                <p className="mx-auto max-w-[700px] pt-3 text-gray-800 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The platform for creators to monetize with their audience.
                  <br />
                  Create. Build. Monetize.
                </p>
              </div>
              <div className="space-x-4 pt-2">
                <Link href="/api/auth/signin?callbackUrl=/create-community">
                  <Button className="text-xl">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/000/266/247/small_2x/Multicultural_Communities_vector_2.jpg"
              alt="Commnity_Image"
              height={310}
              width={550}
              priority
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <Card className="w-[450px] px-2 py-4">
                    <div className="grid gap-1">
                      <h3 className="text-4xl font-bold text-primary">
                        Connect
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Build a space for your community to engage with each
                        other
                      </p>
                    </div>
                  </Card>
                </li>
                <li>
                  <Card className="w-[450px] px-2 py-4">
                    <div className="grid gap-1">
                      <h3 className="text-4xl font-bold text-primary">
                        Exclusive Access
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Share content and discussions only available to your
                        members
                      </p>
                    </div>
                  </Card>
                </li>
                <li>
                  <Card className="w-[450px] px-2 py-4">
                    <div className="grid gap-1">
                      <h3 className="text-4xl font-bold text-primary">
                        Membership
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Offer subscription tiers and manage your community
                      </p>
                    </div>
                  </Card>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-center text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Discover the Workflow Community Builders Rely On.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to become part of something bigger? Join{" "}
                <span className="font-bold text-primary">AIKY</span> today{" "}
                <br /> and start building meaningful connections, making a
                difference, and creating a stronger, more vibrant community.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
