import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";

export const insertCustomerSchema = createInsertSchema(customers, {
	firstName: (field) => field.min(1, "First name is required"),
	lastName: (field) => field.min(1, "Last name is required"),
	address1: (field) => field.min(1, "Address is required"),
	city: (field) => field.min(1, "City is required"),
	state: (field) => field.length(2, "State must be 2 characters"),
	zip: (field) => field.length(5, "Zip code must be 5 characters"),
	email: (field) =>
		field.email("Invalid email address").min(1, "Email is required"),
	phone: (field) => field.regex(/^\d{10}$/, "Phone number must be 10 digits"),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type InsertCustomerSchema = typeof insertCustomerSchema._type;
export type SelectCustomerSchema = typeof selectCustomerSchema._type;
