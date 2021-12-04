const catalogoResolver = {
    Query: {
        catalogoDetailById: (_, {idCatalogo}, { dataSources}) => {
            
                return dataSources.CatalogoAPI.getCatalogo(idCatalogo)
          
    
        },
    },
   
};
module.exports = catalogoResolver;