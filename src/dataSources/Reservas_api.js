const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class ReservasAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.reservas_api_url;
    }
    async createReservas(reservas) {
        reservas = new Object(JSON.parse(JSON.stringify(reservas)));
        return await this.post(`/reservas/`, reservas);
    }
    async getReserva(idReserva) {
        return await this.get(`/reservas/${idReserva}/`);
    }

}
module.exports = ReservasAPI;
