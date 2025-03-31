import Image from "next/image";

export const metadata = {
	title: "404 - Page Not Found",
	description: "Sorry, the page you are looking for does not exist.",
};

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center">
			<h1 className="text-4xl font-bold">404 - Page Not Found</h1>
			<p className="mt-4 text-lg">
				Sorry, the page you are looking for does not exist.
			</p>
			<Image
				src="/images/error.jpg"
				alt="Error Image"
				width={200}
				height={200}
				className="mt-8 rounded-lg shadow-lg"
				priority={true}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				title="Error Image"
			/>
		</div>
	);
}
