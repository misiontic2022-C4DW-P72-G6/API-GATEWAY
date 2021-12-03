const { gql } = require('apollo-server');

const ReservasTypeDefs = gql`


type ReservasDetail {
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

type Query {
    reservasDetailById(reservasId: Int!): ReservasDetail!
}`;

module.exports = ReservasTypeDefs;


