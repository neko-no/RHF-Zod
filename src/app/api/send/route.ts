import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST () {
    try {
        const {data, error} = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['xxxx@gmail.com'],
            subject: "開発相談",
            react: EmailTemplate({username: "test_user", email: "test@gmail.com", content: "開発相談"}) as React.ReactElement
        })

        if(error){
            return NextResponse.json({error})
        }
        return NextResponse.json({data});
    } catch(error) {
        return NextResponse.json({error})
    }
}
