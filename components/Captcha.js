import HCaptcha from '@hcaptcha/react-hcaptcha'
import '../utils/initSupabase.js'

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
		  const response = await supabase.function.invoke('hcaptcha_verify', {
		      body: JSON.stringify({ token }),
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
