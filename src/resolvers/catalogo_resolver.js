const catalogoResolver = {
    Query: {
        catalogoDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId)
            else
                return null
    
        },
    },
   
};
module.exports = catalogoResolver;