import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "Email service is not configured. Please set the RESEND_API_KEY environment variable." },
                { status: 500 }
            );
        }

        const { name, email, message } = await request.json();

        // Server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Initialize Resend with key
        const resend = new Resend(apiKey);

        // Send the email via Resend
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "boudmaghmounir@gmail.com",
            replyTo: email,
            subject: `New Message from ${name} (Portfolio)`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
                    <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">New Contact Form Message</h2>
                    <div style="margin-top: 16px;">
                        <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
                    </div>
                    <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6;">
                        <p style="margin: 0; font-weight: bold; color: #64748b; margin-bottom: 8px;">Message:</p>
                        <p style="margin: 0; white-space: pre-wrap; line-height: 1.5; color: #334155;">${message}</p>
                    </div>
                    <footer style="margin-top: 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 16px;">
                        Sent automatically from your portfolio website.
                    </footer>
                </div>
            `
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
