import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import {
  StyledFormButton,
  StyledFormFieldContainer,
  StyledMessage,
  StyledMultiLineTextField,
  StyledSingleLineTextField,
} from "../styles";
import { handleRecaptcha } from "./utils";
import { EmailJsConfig } from "../types";

type FormValues = {
  from_name: string;
  from_email: string;
  message: string;
};

const ContactForm: React.FC<EmailJsConfig> = (props) => {
  const { serviceId, templateId, apiKey } = props;

  const validationSchema = Yup.object().shape({
    from_name: Yup.string().required("User name is required"),
    from_email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues: FormValues = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const handleSubmit = async (values: FormValues, actions: any) => {
    try {
      const isRecaptchaPass = await handleRecaptcha(
        "CONTACT_FORM",
        process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY ?? ""
      );

      if (!isRecaptchaPass) {
        return;
      } else {
        const { from_name, from_email, message } = values;
        console.log("form values", values);

        /*         console.log("values", values);
        console.log("service id", serviceId);
        console.log("template id", templateId);

        const result = await emailjs.send(
          serviceId ?? "",
          templateId ?? "",
          {
            message: message,
            from_name: from_name,
            from_email: from_email,
          },
          apiKey ?? ""
        ); */

        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from_name: from_name,
            from_email: from_email,
            message: message,
          }),
        });

        const result = response.json();
        console.log("result", result);
      }
    } catch (error: any) {
      console.error(error.message);
    }

    actions.setSubmitting(false);
  };

  return (
    <div>
      <StyledMessage>{`Kedves Látogató! Ha bármilyen kérdésed, észrevételed van, nyugodtan írj nekünk a kapcsolati űrlap segítségével. Várjuk üzeneted és hamarosan válaszolunk rá!`}</StyledMessage>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <StyledFormFieldContainer>
              <StyledSingleLineTextField
                type="text"
                placeholder="Az Ön neve"
                name="from_name"
              />
              <StyledSingleLineTextField
                type="email"
                placeholder="E-mail címe"
                name="from_email"
              />
              <StyledMultiLineTextField
                component="textarea"
                placeholder="Az üzenet szövege"
                name="message"
              />
              <StyledFormButton type="submit" disabled={isSubmitting}>
                {`ELKÜLD`}
              </StyledFormButton>
            </StyledFormFieldContainer>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
