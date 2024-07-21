import formData from "form-data";
import Mailgun from "mailgun.js";

import type { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "",
  });

  const { email, message, name } = req.body;

  try {
    const msg = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: `${name} <mailgun@${process.env.MAILGUN_DOMAIN || ""}>`,
      to: ["sales@piggybackstudios.co"],
      subject: `Piggyback Studios Marketing Site Contact Form Submission - Project Inquiry from ${name}`,
      text: message,
      html: `<h1>${message}</h1>`,
    });
    console.log(msg);
  } catch (err) {
    console.log(err);
  }

  // send success or failure response here
  return Response.json({ message: "Hello from Next.js!" }, { status: 200 });
}
