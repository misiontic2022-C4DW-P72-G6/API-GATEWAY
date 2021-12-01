const { gql } = require('apollo-server');

const authTypeDefs = gql`
type Tokens {
    refresh: String!
    access: String!
}
type Access {
    access: String!
}
input CredentialsInput {
    username: String!
    password: String!
}


input SignUpInput {
    username: String!
    password: String!
    Nombres: String!
    Apellidos: String!
    No_documento: Int!
    Direccion: String!
    Telefono: Int!
    Correo: String!
    Ciudad: String!
    balance: Int!
}
type UserDetail {
    id: Int!
    Nombres: String!
    Apellidos: String!
    No_documento: Int!
    Direccion: String!
    Telefono: Int!
    Correo: String!
    Ciudad: String!
}
type Mutation {
    signUpUser(userInput :SignUpInput): Tokens!
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(refresh: String!): Access!
}
type Query {
    userDetailById(userId: Int!): UserDetail!
}`;

module.exports = authTypeDefs;


