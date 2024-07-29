import { EmailTemplate } from '../../_component/email-template';
import { Resend } from 'resend';

const resendh = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KET);


export async function POST(req) {
  try {
    const body = await req.json(); 
    const { fullName } = body; 
    // console.log(email)
    const response = await resendh.emails.send({
      from: "onboarding@resend.dev",
      to: ['dsimo4323@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: fullName }),
    });

    return new Response.json(response);
  } catch (error) {
    console.log('error', error);
    return new Response(JSON.stringify({ error: error.message }));
  }
}
