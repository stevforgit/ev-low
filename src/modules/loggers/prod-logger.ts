import winston from 'winston';

export const prodLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'prod-service' },
    transports: [
        new winston.transports.Console()
    ]
});