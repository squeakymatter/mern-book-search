// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Book {
    authors: [String]
    bookId: String!
    image: String
    link: String
    title: String!
    description: String
  }
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      authors: [String]
      title: String!
      description: String
      bookId: String!
      image: String
      link: String
    ): User
    removeBook(bookId: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
