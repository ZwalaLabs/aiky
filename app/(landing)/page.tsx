import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image";



function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="fixed w-full bg-black text-white px-4 lg:px-6 h-14 flex items-center">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#home">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="ab">
            About
          </Link> */}
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold bg-primary text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build your community
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The platform for creators to connect with their audience. Accessible. Customizable. Open Source.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:text-primary hover:bg-gray-200 hover:border-primary hover:border-2 hover:font-bold"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-black text-white px-6 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  href="#"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
              src='https://static.vecteezy.com/system/resources/thumbnails/000/266/247/small_2x/Multicultural_Communities_vector_2.jpg'
              alt='Commnity_Image'
              height={310}
              width={550}
              priority
              />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Connect</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Build a space for your community to engage with each other.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Exclusive access</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Share content and discussions only available to your members.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Membership</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Offer subscription tiers and manage your community.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Discover the Workflow Community Builders Rely On.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to become part of something bigger? Join <span className='text-primary font-bold'>AIKY</span> today and start building meaningful connections, making a difference, and creating a stronger, more vibrant community.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2" onSubmit={console.log('not implement in v0')}>
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Landing;