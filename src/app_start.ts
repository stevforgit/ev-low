import express from 'express';
import { logger } from './modules/loggers';

export const createExpressApp = () => {

    const app = express();

    app.get('/', (req: any, res: any) => {
        logger.info('health check!');
        res.send('ok');
    });

    return app;
}