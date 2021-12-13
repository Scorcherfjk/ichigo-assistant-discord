const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
 
const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new (transports.Console)({ json: false, timestamp: true }),
    new transports.File({ filename: './logs/debug.log', json: false}),
  ],
  exceptionHandlers: [
    new (transports.Console)({ json: false, timestamp: true }),
    new transports.File({ filename: './logs/exceptions.log', json: false })
  ],
});


module.exports = logger