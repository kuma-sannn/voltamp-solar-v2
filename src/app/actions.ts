"use server";

import { z } from "zod";

function simpleSanitize(str: string): string {
    return str.replace(/[<>]/g, "");
}

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number."),
    monthlyBill: z.string()
        .min(1, "Please enter a bill amount.")
        .refine((val) => !isNaN(Number(val)), "Must be a number.")
        .refine((val) => Number(val) >= 500, "Bill amount is too low to qualify for solar ROI estimation.")
        .refine((val) => Number(val) <= 1000000, "Please enter a realistic bill amount."),
    propertyType: z.enum(["Residential", "Commercial", "Industrial"], {
        message: "Please select a valid property type.",
    }),
});

export async function submitConsultation(data: any) {
    try {
        // 1. Server-Side Validation
        const validatedData = formSchema.parse(data);

        // 2. Sanitization
        const sanitizedData = {
            name: simpleSanitize(validatedData.name),
            phone: simpleSanitize(validatedData.phone),
            monthlyBill: simpleSanitize(validatedData.monthlyBill),
            propertyType: simpleSanitize(validatedData.propertyType),
        };

        // 3. Process (Logging for now, ready for DB/Email)
        console.log("Server Action Received:", sanitizedData);

        return { success: true, message: "Audit request successfully received!" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: "Validation failed.", details: error.flatten().fieldErrors };
        }
        console.error("Action Error:", error);
        return { success: false, error: "An internal error occurred." };
    }
}
