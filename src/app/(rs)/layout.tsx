import Header from "@/components/Header";
import React from "react";

export default async function RsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-auto w-full max-w-7xl">
			<Header />
			<div className="px-4 py-2">{children}</div>
		</div>
	);
}
