import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation ($loginData: UserRegisterInput!) {
    login(data: $loginData)
  }
`;
