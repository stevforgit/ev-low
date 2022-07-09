
import winston, { format } from 'winston';
const { timestamp, combine } = format;

export const devLogger = winston.createLogger({
    format: combine(
        winston.format.simple(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true })
    ),
    defaultMeta: { env: process.env.NODE_ENV },
    transports: [
        new winston.transports.Console()
    ]
});