const { gql } = require('apollo-server');
const accountTypeDefs = gql`
    type Account {
    username: String!
    balance: Int!
    last_Challenges: String!
 }
 extend type Query {
 accountByUsername(username: String!): Account
 }
`;
module.exports = accountTypeDefs;