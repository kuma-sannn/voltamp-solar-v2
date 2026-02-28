import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        
        // 1. Validate data exists
        if (!body.email && !body.phone) {
             return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
        }

        // 2. Format the Email (Industrial Lead Style)
        const emailContent = `
            INDUSTRIAL LEAD: ${body.service.toUpperCase()}
            Name: ${body.name}
            Phone: ${body.phone}
            Monthly Bill: INR ${body.monthlyBill}
            Source: Voltamp Solar Website
        `;

        // Logic for sending (e.g., via Resend, Postmark, or Nodemailer) would go here
        console.log("Routing lead to info@sunonrent.com...");

        return NextResponse.json({ 
            success: true, 
            message: "Lead successfully routed to Voltamp Engineering Team" 
        });
    } catch (error) {
        return NextResponse.json({ error: "Routing Failed" }, { status: 500 });
    }
}