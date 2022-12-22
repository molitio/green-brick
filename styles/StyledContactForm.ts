import styled from "styled-components";
import { Field } from "formik";

export const StyledFormFieldContainer = styled.div`
  gap: 1em;
  width: 24em;
  display: flex;
  margin-top: 2em;
  margin-bottom: 2em;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
`;

export const StyledMessage = styled.p`
  width: 28em;
  text-align: left;
  font-size: 0.8rem;
  font-weight: lighter;
  font-family: Helvetica, Arial, sans-serif;
`;

export const StyledSingleLineTextField = styled(Field)`
  height: 3em;
  font-family: Helvetica, Arial, sans-serif;
`;

export const StyledMultiLineTextField = styled(Field)`
  resize: none;
  height: 12em;
  font-family: Helvetica, Arial, sans-serif;
`;

export const StyledFormButton = styled.button`
  width: 8em;
  border: 1px solid ${(props) => props?.theme?.palette?.text?.primary};
  height: 3em;
  align-self: center;
  background-color: transparent;
  font-family: Helvetica, Arial, sans-serif;
  color: ${(props) => props?.theme?.palette?.text?.primary};
`;
