const { gql } = require('apollo-server');

const ReservasTypeDefs = gql`




input SignUpInput {
    nombrecuentaUsuario: Int!
    fechaReserva: String!
    fechaInicio: String!
    fechaFin: String!
    personas: String!
    idHotel: Int!
    estado: String!
    mediodePago: String!

}
type UserDetail {
    idReserva: Int!
    nombrecuentaUsuario: Int!
    fechaReserva: String!
    fechaInicio: String!
    fechaFin: String!
    personas: String!
    idHotel: Int!
    estado: String!
    mediodePago: String!
}
type Mutation {
    signUpUser(userInput :SignUpInput): Tokens!
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(refresh: String!): Access!
}
type Query {
    userDetailById(userId: Int!): UserDetail!
}`;

module.exports = ReservasTypeDefs;


