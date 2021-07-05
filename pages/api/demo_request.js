const fetch = require('node-fetch');

export default function handler(req, res) {
	if (req.method === 'POST') {
		let email = req.body['email']
		const hookURL = process.env.airtable_hook
		const payload = `email=${email}&date=${new Date().toLocaleDateString('en-US')}`

	  fetch(hookURL, {
		  method: 'post',
		  body: payload,
		  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	  }).then(response => {
		  if(response.ok) {
			return res.status(200).json({
				'status': 'Success'
			 })
		  }
		  else {
			  return res.status(500).json({
				  'status': 'Failed'
			  })
		  }
	  })
	}
}
