import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import * as Sentry from "@sentry/nextjs";
import CustomerForm from "./CustomerForm";

export default async function CustomerFormPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	try {
		const { customerId } = await searchParams;
		// Edit customer form
		if (customerId) {
			const customer = await getCustomer(parseInt(customerId));
			if (!customer) {
				return (
					<>
						<h2 className="text-2xl mb-2">
							Customer ID #{customerId} not found
						</h2>
						<BackButton
							title="Back"
							variant="outline"
							size="sm"
							className="mb-4"
						/>
					</>
				);
			}
			// put customer data into form fields
			return <CustomerForm customer={customer} />;
		} else {
			// New Customer form
			return <CustomerForm />;
		}
	} catch (error) {
		if (error instanceof Error) {
			Sentry.captureException(error);
			throw error;
		}
	}
}
