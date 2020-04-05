import { gql } from "apollo-boost";

export const FORGOT_PASSWORD_EMAIL = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
