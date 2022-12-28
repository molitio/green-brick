import { SMTPClient } from "emailjs";

export const emailClient = () =>
  new SMTPClient({
    user: process.env.EMAILJS_USER,
    password: process.env.EMAILJS_PASSWORD,
    host: process.env.EMAILJS_HOST,
    ssl: true,
  });
