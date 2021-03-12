import 'reflect-metadata';
import { createExpressServer, RoutingControllersOptions } from "routing-controllers"

import { UserController } from "./server/controllers/UserController";
import {PingController} from './server/controllers/PingController';

const routingControllersOptions: RoutingControllersOptions = {
  routePrefix: "/api/v1",
  controllers: [
    PingController,
    UserController
  ],
  middlewares: []

};

const server = createExpressServer(routingControllersOptions);
const port = process.env.port || 3333;

server.listen(port, () => {
  console.log(`🚀 Listening at http://localhost:${port}${routingControllersOptions.routePrefix}`);
});
