const reservasResolver = {
    Query: {
        reservaidReserva: async (_, { idReserva }, { dataSources, userIdToken }) => {
            idReservaToken = (await dataSources.authAPI.getReservas(userIdToken)).idReserva
            if (idReserva == idReservaToken)
                return await dataSources.reservaAPI.reservaByidReserva(idReserva)
            else
                return null
        },
    },
    Mutation: {}
};
module.exports = reservasResolver;