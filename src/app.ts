import express from 'express';
import winston from 'winston';
import dotenv from 'dotenv';
dotenv.config();
import { logger } from './modules/loggers/index';

const app = express();

app.get('/', (req:any, res: any) => {
    console.log(process.env.NODE_ENV)

    logger.info('Info log!', { _messageId: 'a3der3-h898kju0-34343', reason: 'Itis an error' });
    res.send('ok');
});

app.listen(process.env.PORT || 5000, () => console.log('Server is now running....'));