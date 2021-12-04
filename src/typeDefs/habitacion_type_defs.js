const { gql } = require('apollo-server');

const HabitacionTypeDefs = gql`


type HabitacionDetail {
    idHotel: Int!
    Nombre: String!
    Ubicacion: String!
    Calificacion: Int!
    Direccion: String!
    Descripcion: String!
    Correo: String!

}

type Query {
    habitacionDetailById(habitacionId: Int!): HabitacionDetail!
}`;

module.exports = HabitacionTypeDefs;