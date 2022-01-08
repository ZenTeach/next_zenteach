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
		  const result = await fetch(`/api/hcaptcha_verify`,
			{
				method: 'POST',
				cache: 'no-cache',
				body: JSON.stringify({ token }),
				referrerPolicy: 'no-referrer',
				headers: {
					'Content-Type': 'application/json'
				}
			})

		  if (result) {
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
