import { Email, SendResult } from "../../types";
import emailjs from "@emailjs/browser";

export const emailClient = async (email: Email): Promise<SendResult> => {
  try {
    if (!email) {
      return "error";
    }

    const message = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID ?? "",
      process.env.EMAILJS_TEMPLATE_ID ?? "",
      {
        text: email.message,
        from_name: email.from_name,
        from_email: email.from_email,
      },
      process.env.EMAILJS_API_KEY ?? ""
    );

    return "success";
  } catch (error: any) {
    console.error("client error: ", error);
    return "error";
  }
};
