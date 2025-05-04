"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
	insertTicketSchema,
	type insertTicketSchemaType,
	type selectTicketSchemaType,
} from "@/zod-schemas/ticket";
import { SelectCustomerSchema } from "@/zod-schemas/customer";

type Props = {
	customer: SelectCustomerSchema;
	ticket?: selectTicketSchemaType;
};

export default function TicketForm({});
