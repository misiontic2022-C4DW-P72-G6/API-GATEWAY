const ReservasResolver = {
    Query: {
        userDetailById: (_, { idReserva }, { dataSources, userIdToken }) => {
            if (idReserva == userIdToken)
                return dataSources.reserva_API.getUser(idReserva)
            else
                return null
    
        },
    },
    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
            const ReservasInput = {
                username: userInput.username,
                balance: userInput.balance,
                lastChange: (new Date()).toISOString()
            }
            await dataSources.reserva_API.createReservas(ReservasInput);
    
    
            const reservaInput = {
                nombrecuentaUsuario: userInput.nombrecuentaUsuario,
                fechaReserva: userInput.fechaReserva,
                fechaInicio: userInput.fechaInicio,
                fechaFin:userInput.fechaFin,
                personas:userInput.personas,
                idHotel:userInput.idHotel,
                estado:userInput.estado,
                mediodePago: userInput.mediodePago,
               

            }
            return await dataSources.reserva_API.createUser(ReservasInput);
    },
    logIn: (_, { credentials }, { dataSources }) =>
        dataSources.reserva_API.authRequest(credentials),
    
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.reserva_API.refreshToken(refresh),

    }
};
module.exports = ReservasResolver;