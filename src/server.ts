
import dotenv from 'dotenv';
import setTZ from 'set-tz';
dotenv.config();
setTZ('UTC');

import { createExpressApp } from './app_start';
import { logger } from './modules/loggers/index';

const server = createExpressApp();

server.listen(process.env.PORT || 5000, () => {
    logger.info(`${process.env.NODE_ENV} server is now running....`);
});