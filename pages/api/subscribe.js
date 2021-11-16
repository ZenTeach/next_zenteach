
const subscribe = async (req, res) => {
  const { email } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members?skip_merge_validation=true`

  const data = {
    email_address: email,
    status: 'subscribed'
  }


	console.log(data)
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
      		Authorization: `api_key ${API_KEY}`
		}
	}).then(response => response.json())
	.then(data => {
		console.log(data)
		if (data.status >= 400) {
			return res.status(data.status).json({
				error: `There was an error subscribing to the newsletter.`,
				message: `${data.title}: ${data.detail}`
			})
		}
		return res.status(201).json({ message: 'success' })

	}).catch(response => {
		return res.status(500).json({ error: response.error.message })
	})
}

export default subscribe

