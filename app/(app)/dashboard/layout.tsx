import Header from "@/components/Layout/app/Header";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default async function CommunityLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<>
			<Header />
			<div className='flex'>
				<Sidebar />
				{children}
			</div>
		</>
	);
}
