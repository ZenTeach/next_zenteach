var express = require('express');
var logger = require('./server/logging_middleware')
const fetch = require('node-fetch');
var compression = require('compression')
var helmet = require('helmet')

var app = module.exports = express();

app.use(helmet({
	crossOriginResourcePolicy: false,
	contentSecurityPolicy: false
}))

app.use(compression())

function error(status, msg) {
	var err = new Error(msg);
	err.status = status;
	return err;
}

app.use('/', function(req, res, next) {
	var publicDir = process.env.PUBLIC_DIR || 'dist';
	app.use(express.static(publicDir))
});

app.post('/api/demo_request', function(req, res, next){

	let email = JSON.parse(req.body)['email']
	const hookURL = process.env.AIRTABLE_HOOK_URL
	const date = `${new Date().getDate()}/${new Date().getMonth() }/${new Date().getFullYear()}`
	const payload = `email=${email}&date=${date}`

	fetch(hookURL, {
		method: 'post',
		body: payload,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).then(response => {
		if(response.ok) {
			logger.info("Submitted demo request")
			return res.status(200).json({
				'status': 'Success'
			})
		}
		else {
			logger.error("Error submitting demo request", response)
			return res.status(500).json({
				'status': 'Failed'
			})
		}
	})
	.catch(next)
});



 // middleware with an arity of 4 are considered
 // error handling middleware. When you next(err)
 // it will be passed through the defined middleware
 // in order, but ONLY those with an arity of 4, ignoring
 // regular middleware.
 app.use(function(err, req, res, next){
   // whatever you want here, feel free to populate
   // properties on `err` to treat it differently in here.
	 logger.error(`Server error ${err}`)
   res.status(err.status || 500);
   res.send({ error: err.message });
 });

 // our custom JSON 404 middleware. Since it's placed last
 // it will be the last middleware called, if all others
 // invoke next() and do not respond.
 app.use(function(req, res){
	 logger.error(`Couldn't find request uri ${req.url}`)
   res.status(404);
   res.send({ error: "Lame, can't find that" });
 });

 /* istanbul ignore next */
 if (!module.parent) {
	 const port = process.env.NODE_PORT || 3000;
   app.listen(port);
   console.log('Express started on port 3000');
 }
