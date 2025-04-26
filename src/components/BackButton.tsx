"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

type Props = {
	title: string;
	className?: string;
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link";
	size?: "default" | "sm" | "lg" | "icon";
	disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function BackButton({
	title,
	className,
	variant,
	size,
	disabled,
	...props
}: Props) {
	const router = useRouter();

	return (
		<Button
			variant={variant}
			size={size}
			className={`w-fit ${className}`}
			onClick={() => router.back()}
			disabled={disabled}
			title={title}
			aria-label={title}
			{...props}>
			{title}
		</Button>
	);
}
