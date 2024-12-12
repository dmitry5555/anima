'use client'
import DataPage from "@/components/DB";
import ResponsiveThree from "@/components/ExampleAnimation";
import MetaMaskConnect from "@/components/MetaMask";
// connect wallet
// install three-js lib - any example
// choose menu-three-js reacts

import Link from "next/link"


export default function Home() {
  return (
    <div className="bg-slate-200 font-bold gap-8 p-12 flex flex-col h-screen">
	  <div className="mx-auto max-w-screen-lg w-full flex flex-col gap-4 p-8  bg-orange-100">
	  <div className="gap-2 flex flex-col">
			<h2>Wallet</h2>
			<MetaMaskConnect />
		</div>	
		<div className="gap-2 flex flex-col">
			<h2>Token actions</h2>
			<div className="gap-2 flex">
				<Link className="px-2 py-1 border-2 rounded-xl border-black" href="/">Select track</Link>
				<Link className="px-2 py-1 border-2 rounded-xl border-black" href="/">Choose token</Link>
			</div>
		</div>
		<div className="gap-2 flex flex-col">
			<h2>DB Data</h2>
			<DataPage />
		</div>
		<div className="flex h-96 w-full flex-col gap-2">
			<h2>Three-js</h2>
			<ResponsiveThree />
		</div>
			
	  </div>
	</div>
  );
}
