import { getCustomer } from "@/lib/queries/getCustomer";
import BackButton from "@/components/BackButton";
import { getTicket } from "@/lib/queries/getTicket";
import * as Sentry from "@sentry/nextjs";

export default async function TicketFormPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	try {
		const { customerId, ticketId } = await searchParams;
		if (!ticketId && !customerId) {
			return (
				<>
					<h2 className="text-2xl mb-2">
						Ticket ID or Customer ID required to load ticket form.
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
			if (!customer.active) {
				return (
					<>
						<h2 className="text-2xl mb-2">
							Customer ID #{customerId} is not active
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
			// return ticket form with customer data
			console.log(customer);
		}
		if (ticketId) {
			const ticket = await getTicket(parseInt(ticketId));
			if (!ticket) {
				return (
					<>
						<h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
						<BackButton
							title="Back"
							variant="outline"
							size="sm"
							className="mb-4"
						/>
					</>
				);
			}
			// return ticket form with ticket data
			const customer = await getCustomer(ticket.customerId);
			// reutn ticket form
			console.log(ticket);
			console.log(customer);
		}
	} catch (error) {
		if (error instanceof Error) {
			Sentry.captureException(error);
			throw error;
		}
	}
}
