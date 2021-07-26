const { createLogger, format, transports, config } = require('winston')
var logDir = process.env.LOG_DIR || 'logs'
var logLevel = process.env.LOG_LEVEL || 'info'


var logger = createLogger({
	levels: config.syslog.levels,
	format: format.combine(
		format.prettyPrint(),
		format.timestamp({
		  format: 'DD-MM-YYYY hh:mm:ss A'
		}),
		format.printf(nfo => {
		  return `${nfo.timestamp} - ${nfo.level}: ${nfo.message}`
		})
	  ),
	transports: [
		  new transports.Console({
			  level: logLevel,
			  colorize: true,
			  timestamp: true
		  })
	]
});


var origLog = logger.log;

logger.log = function (level, msg) {
  var objType = Object.prototype.toString.call(msg);
  if (objType === '[object Error]') {
    origLog.call(logger, level, msg.toString());
  } else {
    origLog.call(logger, level, msg);
  }
};

if (process.env.NODE_ENV === 'production') {
	logger.add(new transports.File({
		level: logLevel,
		filename: `${logDir}/server.log`
	}))
}


module.exports = logger
