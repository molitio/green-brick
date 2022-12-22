import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  StyledFormButton,
  StyledFormFieldContainer,
  StyledMessage,
  StyledMultiLineTextField,
  StyledSingleLineTextField,
} from "../styles";
import { handleRecaptcha } from "./utils";

type FormValues = {
  userName: string;
  emailAddress: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("User name is required"),
    emailAddress: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues: FormValues = {
    userName: "",
    emailAddress: "",
    message: "",
  };

  const handleSubmit = async (values: FormValues, actions: any) => {
    const isRecaptchaPass = await handleRecaptcha(
      "CONTACT_FORM",
      process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY ?? ""
    );

    if (!isRecaptchaPass) {
      return;
    } else {
      console.log("//TODO: submit form");
      //TODO: submit form
    }

    actions.setSubmitting(false);
  };

  return (
    <div>
      <StyledMessage>{`Kedves Látogató! Ha bármilyen kérdésed, észrevételed van, nyugodtan írj nekünk a kapcsolati űrlap segítségével. Várjuk üzeneted és hamarosan válaszolunk rá!"`}</StyledMessage>
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
                name="userName"
              />
              <StyledSingleLineTextField
                type="email"
                placeholder="E-mail címe"
                name="emailAddress"
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
