const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.errors({ stack: true }),
  defaultMeta: { service: 'workflow-editor' },
  transports: [new winston.transports.Console({
    format: winston.format.simple(),
  })],
});

if (process.env.NODE_ENV === 'production') {
  logger.add(
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  );
}

module.exports = logger;
