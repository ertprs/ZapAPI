import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/session/create/:nameSession', SessionController.store);

export default routes;
