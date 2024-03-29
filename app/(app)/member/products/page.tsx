"use client";
import { CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { emptyProducts } from "../constant";

function Products() {
	// State holding values for all products for this community
	const [allProducts, setAllProducts] = useState([]);

	return (
		<>
			<CardTitle className="py-4 px-2 text-3xl">Products</CardTitle>
			{allProducts.length === 0 ? (
				<div className="p-4 flex flex-col items-center justify-center w-[600px]">
					<Image
						src={emptyProducts?.image}
						alt={emptyProducts.dynamicTitle("products")}
						sizes="30vw"
						width="300"
						height="300"
						className="flex-1 object-cover"
						priority
					/>
					<h1 className="font-bold py-3 px-2 text-2xl">
						{emptyProducts.dynamicTitle("products")}
					</h1>
					<p className="py-3 px-2">{emptyProducts.content}</p>
				</div>
			) : (
				// {allProducts.map(({product}:{product:string}) => {
				//     <h1>{product}</h1>
				// })}
				<h1>Products</h1>
			)}
		</>
	);
}

export default Products;
