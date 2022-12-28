import type { NextApiRequest, NextApiResponse } from "next";
import { emailClient } from "../../components";

const submitEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req?.body;

    if (!email) {
      return res.status(500)?.json({
        message: "Missing email",
      });
    }

    const client = emailClient();

    const textConstruct = `bruderbau.hu kapcsolat felvétel üzenet: 
      
      ${email.text}`;

    const messageConstruct = `Üzenet ${email.from} feladótól, bruderbau.hu kapcsolat felvétel`;

    const message = await client.sendAsync({
      text: textConstruct,
      from: email.from,
      to: process.env.EMAILJS_DEFAULT_RECIPENT ?? "",
      subject: messageConstruct,
    });

    return res.status(200)?.json({
      message: message.text,
    });
  } catch (error) {
    res.status(500)?.json({
      message: "Error submitting email",
    });
  }
};

export default submitEmail;
