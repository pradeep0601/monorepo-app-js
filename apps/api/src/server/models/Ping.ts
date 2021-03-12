export class PingResponse {
    serviceName: String;
    serviceStatus: String;
    lastUpdated: Date;

    constructor(serviceStatus: string) {
        this.serviceStatus = serviceStatus;
    }

    static getHealthyInstance(): PingResponse {
        const resp = new PingResponse("Healthy");
        resp.serviceName = "api-service";
        resp.lastUpdated = new Date(); 
        return resp;
    }
}
