const { gql } = require('apollo-server');

const CatalogoTypeDefs = gql`


type CatalogoDetail {
    idHotel: Int!
    Nombre: String!
    Ubicacion: String!
    Calificacion: Int!
    Direccion: String!
    Descripcion: String!
    Correo: String!

}

type Query {
    catalogoDetailById(catalogoId: Int!): CatalogoDetail!
}`;

module.exports = CatalogoTypeDefs;