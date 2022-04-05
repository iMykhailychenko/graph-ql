import { gql } from 'apollo-angular';

export const postsListQuery = gql`
  query Posts {
    posts {
      _id
      title
      image
      description
    }
  }
`;

export const postItemQuery = gql`
  query Post($id: ID!) {
    post(id: $id) {
      _id
      title
      image
      description
    }
  }
`;
