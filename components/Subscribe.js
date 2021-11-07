import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, forwardRef } from 'react'

const Subscribe = forwardRef((_props, _ref) => {
	const [subscribeButton, setSubscribeButton] = useState('')
	const [email, setEmail] = useState('')
	const [state, setState] = useState('idle')
	const [errorMsg, setErrorMsg] = useState(null)

	const subscribe = async (e) => {
	  e.preventDefault()

	  	setState('Loading')
		console.log(`Subscribing ${email}`)
		fetch('/api/subscribe', {
			method: 'POST',
			cache: 'no-cache',
			body: JSON.stringify({ email }),
			referrerPolicy: 'no-referrer',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(async(response) => {
			console.log(response)
			if (response.status >= 400) {
				setState('Error')
				setSubscribeButton('error')
				let data = await response.json()
				setErrorMsg(data.message || 'We are facing some technical difficulties adding your email to our subscribers list. Please try again in few moments.')
			}
			else {
				setState('Success')
				setSubscribeButton('success')
				setEmail('')
			}
		})
		.catch(response => {
			setState('Error')
			setSubscribeButton('error')
			setErrorMsg(e.response.data)
		})
		// Set timeout for messages
	}

	return (
	  <div className="h-full bg-red-200 bg-opacity-25 border-gray-400 flex flex-col justify-center p-8 m-8">
		<h4 className="text-3xl mt-2 font-bold">Subscribe to our newsletter</h4>
		<p className="text-l mt-2">
		  Get to notified on quality articles about frontend development and more
		  sent to your inbox. I&apos;ll send you an email once a month, no spam.
		</p>
		<form onSubmit={subscribe} className="rounded pt-6 pb-8 mb-4">
		  <div className="mt-4 flex text-center">
			<div className="form-input">
			  <input
				required
				id="email-input"
				name="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="p-2 border border-grey-light round text-grey-dark text-md h-auto"
				placeholder="Your email address"
			  />
			</div>
			<div className="form-input">
			  <button
				disabled={state === 'Loading'}
				type="submit"
				className="bg-black text-white rounded-sm h-auto text-xs p-3"
				onClick={subscribe}
			  >
				{subscribeButton === '' && (
					<p>Subscribe</p>
				)}
				{/* TODO: Add a spinner here */}
				{subscribeButton === 'success' && (
					<span className="mx-2">
						<FontAwesomeIcon className="fill-current text-green" icon={["fas", "check"]}/>
					</span>
				)}
				{subscribeButton === 'error' && (
					<span className="mx-2">
						<FontAwesomeIcon className="fill-current text-red" icon={["fas", "times"]}/>
					</span>
				)}
			  </button>
			</div>
		  </div>
		  {state === 'Error' && (
					<p className="error-state">{errorMsg}</p>
				)}
		  {state === 'Success' && (
			<p>Awesome, you&apos;ve been subscribed!</p>
		  )}
		</form>
	  </div>
	)
  })

Subscribe.displayName = "Newsletter-subscribe"
export default Subscribe
