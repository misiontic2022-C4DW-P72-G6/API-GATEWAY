const ReservasResolver = {
    Query: {
        reservasDetailById: (_, { idReserva }, { dataSources, userIdToken }) => {
            if (idReserva == userIdToken)
                return dataSources.reserva_API.getUser(idReserva)
            else
                return null
    
        },
    },

};
module.exports = ReservasResolver;