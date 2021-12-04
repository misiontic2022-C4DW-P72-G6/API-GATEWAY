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

input CatalogoInput {
    Nombre: String!
    Ubicacion: String!
    Calificacion: Int!
    Direccion: String!
    Descripcion: String!
    Correo: String!
}

input CredentialsInput {
    idHotel: Int!
}

extend type Query {
    catalogoDetailById(catalogoId: Int!): CatalogoDetail
}
extend type Mutation {
    createCatalogo(catalogo: CatalogoInput!): CatalogoDetail
}`;

module.exports = CatalogoTypeDefs;