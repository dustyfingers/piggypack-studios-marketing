import formData from "form-data";
import Mailgun from "mailgun.js";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "",
    url: "https://api.mailgun.net/",
  });

  console.log(req.body);

  const { email, message, name } = req.body;

  mg.messages
    .create("sandbox-123.mailgun.org", {
      from: `${name} <mailgun@sandbox57e34dec1c5446c0b2412b83e569ae7c.mailgun.org>`,
      to: ["sales@piggybackstudios.co"],
      subject: `Contact Form Submission - Project Inquiry from ${name}`,
      text: message,
      html: `<h1>${message}</h1>`,
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.log(err)); // logs any error

  // send success or failure response here
  res.status(200).json({ message: "Hello from Next.js!" });
}
