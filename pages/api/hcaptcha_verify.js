import { verify } from 'hcaptcha'

const hcaptcha_verify = async (req, res) => {
	const { token } = req.body
	const hcaptcha_secret = process.env.HCAPTCHA_SECRET

	verify(hcaptcha_secret, token)
	  .then(data => {
		  if (data.success !== false) {
			  return res.status(data.error-codes[0]).json({
				  error: `There was an error processing your request.`,
			  })
		  }
		  return res.status(201).json({ message: 'success' })

	  }).catch(response => {
		  return res.status(500).json({ error: response.error.message })
	  })
  }

export default hcaptcha_verify

