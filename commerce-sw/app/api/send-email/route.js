import { EmailTemplate } from '../../_component/email-template';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KET);

export async function POST(req) {
  try {
    const body = await req.json(); 
    const { fullName } = body; 
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ['dsimo4323@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: fullName }),
    });
  } catch (error) {
    console.log('error',error)
  }
}
