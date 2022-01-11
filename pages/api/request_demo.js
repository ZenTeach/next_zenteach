import { withSentry } from '@sentry/nextjs'

const request_demo = async (req, res) => {
	const { email } = req.body

	if (!email || !email.length) {
	  return res.status(400).json({ error: 'Email is required' })
	}

	const url = process.env.AIRTABLE_API_ENDPOINT

	const data = {
	  email: email,
	  date: new Date().toLocaleDateString('en-GB')
	}


	  fetch(url, {
		  method: 'POST',
		  body: JSON.stringify(data),
		  headers: {
			  'Content-Type': 'application/json'
		  }
	  }).then(response => response.json())
	  .then(data => {
		  if (data.status >= 400) {
			  return res.status(data.status).json({
				  error: `There was an error processing your request.`,
			  })
		  }
		  return res.status(201).json({ message: 'success' })

	  }).catch(response => {
		  return res.status(500).json({ error: response.error.message })
	  })
  }

  export default withSentry(request_demo)

