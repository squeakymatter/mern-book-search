//graphQL mutations

import gql from 'graphql-tag';

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// SAVE_BOOK will execute the saveBook mutation.
export const SAVE_BOOK = gql`
  mutation saveBook(
    $authors: [String]
    $title: String!
    $description: String
    $bookId: String!
    $image: String
    $link: String
  ) {
    saveBook(
      authors: $authors
      title: $title
      description: $description
      bookId: $bookId
      image: $image
      link: $link
    ) {
      username
      _id
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;

export const REMOVE_BOOK = gql `
mutation removeBook ($bookId: String!){
  removeBook (bookId: $bookId){
      _id
    username
    bookCount
    savedBooks{
      bookId
      authors
      image
      link
      title
      description
    }
  }
}`