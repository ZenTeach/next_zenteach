import HCaptcha from '@hcaptcha/react-hcaptcha'

const Captcha = (props) => {
	const asRef = props.asRef
	const postVerifyCallback = props.postVerifyCallback
	const onError = props.errorCallback
	const hcaptcha_sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY

	const verifyCallback = async (token, eKey) => {
		if (!token) {
		  return setErrorMsg('Captcha validation required')
		}

		try {
		  let url = process.env.NEXT_PUBLIC_SUPABASE_URL
      let auth_token = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
		  const response = await fetch(`${url}/hcaptcha_verify`, {
			  body: JSON.stringify({ email: requesterEmail }),
        headers: { Authorization: `Bearer ${auth_token}` }
		  })
		  if (response) {
			  postVerifyCallback()
		  }
		} catch (error) {
			// TODO: Error handling
		}
	  }
	return (
		<HCaptcha
			sitekey={ hcaptcha_sitekey }
			onVerify={ verifyCallback }
			onError={ onError }
			ref={ asRef } />
	)
}

export default Captcha
