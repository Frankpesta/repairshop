"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
	insertCustomerSchema,
	type InsertCustomerSchema,
	type SelectCustomerSchema,
} from "@/zod-schemas/customer";

type Props = {
	customer?: SelectCustomerSchema;
};

export default function CustomerForm({ customer }: Props) {
	const defaultValues: InsertCustomerSchema = {
		id: customer?.id || 0,
		firstName: customer?.firstName || "",
		lastName: customer?.lastName || "",
		address1: customer?.address1 || "",
		address2: customer?.address2 || "",
		state: customer?.state || "",
		zip: customer?.zip || "",
		phone: customer?.phone || "",
		email: customer?.email || "",
		notes: customer?.notes || "",
		city: customer?.city || "",
	};

	const form = useForm<InsertCustomerSchema>({
		mode: "onBlur",
		resolver: zodResolver(insertCustomerSchema),
		defaultValues,
	});

	async function submitForm(data: InsertCustomerSchema) {
		console.log(data);
	}

	return (
		<div className="flex flex-col gap-1 sm:px-8">
			<div>
				<h2 className="text-2xl font-bold">
					{customer?.id ? "Edit" : "New"} Customer Form
				</h2>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(submitForm)}
					className="flex flex-col sm:flex-row gap-4 sm:gap-8">
					<p>{JSON.stringify(form.getValues())}</p>
				</form>
			</Form>
		</div>
	);
}
