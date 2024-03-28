import Header from "@/components/Layout/app/Header";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
function Page() {
	return (
		<div>
			<Header />
			{/* Card 1 with Details of community: coverPhoto with logo for community, community name, NUmber of members, cost of joinning the community then a br and hosted by name */}
			<Card className="flex flex-col align-center justify-center border-0">
				{/* coverPhoto */}
				<div className="bg-[url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54043.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1711584000&semt=ais')] h-[400px] w-[800px] self-center mt-6 rounded-t-[30px]" />
				{/* Other Details */}
				<div className="h-[260px] w-[800px] self-center rounded-b-[30px] bg-red-100">
					{/* community logo */}
					{/* Community details */}
					<div className="flex justify-between p-6 ">
						<div>
							{/* Community Name */}
							<CardTitle className="py-2">Community Name</CardTitle>
							{/* Community Member */}
							<div className="flex gap-2 p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<title>Members</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
									/>
								</svg>
								2 Members
							</div>
							{/* Community Cost */}
							<div className="flex gap-2 p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<title>Cost</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 6h.008v.008H6V6Z"
									/>
								</svg>
								Free
							</div>
						</div>
						<Button>Go to Member Portal</Button>
					</div>
					<hr className="border-1 border-black" />
					{/* Community Host */}
					<div className="justify-between py-2 px-6">
						<small>Hosted by</small>
						<div className="flex gap-2 items-center">
							<Avatar>
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<h3 className="text-xl font-bold">Tester</h3>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Page;
