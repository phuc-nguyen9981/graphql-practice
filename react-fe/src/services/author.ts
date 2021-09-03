import { gql } from "@apollo/client";

export const GET_AUTHOR_QUERY = gql`
  query ($params: AuthorQueryInput!) {
    authors(params: $params) {
      id
      name
      createdAt
      updatedAt
      books {
        id
        title
      }
    }
  }
`;
