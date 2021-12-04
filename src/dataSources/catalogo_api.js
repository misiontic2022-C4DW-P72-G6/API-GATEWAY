const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class CatalogoAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.catalogo_api_url;
    }
    async createCatalogo(catalogo) {
        catalogo = new Object(JSON.parse(JSON.stringify(catalogo)));
        return await this.post(`/catalogo/`, catalogo);
    }
    async getCatalogo(idCatalogo) {
        return await this.get(`/catalogo/${idCatalogo}/`);
    }

    async createHabitacion(habitacion) {
        habitacion = new Object(JSON.parse(JSON.stringify(habitacion)));
        return await this.post(`/habitacion/`, habitacion);
    }
    async getHabitacion(idHabitacion) {
        return await this.get(`/habitacion/${idHabitacion}/`);
    }

}
module.exports = CatalogoAPI;
