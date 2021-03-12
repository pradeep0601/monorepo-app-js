import {JsonController, Get} from "routing-controllers";
import { PingResponse } from '../../models/Ping';


@JsonController('')
export class PingController {

    @Get('/ping')
    ping(): PingResponse {
        const resp = PingResponse.getHealthyInstance();
        return resp;
    }
}