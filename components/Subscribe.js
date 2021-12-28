import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, forwardRef } from 'react'

const Subscribe = forwardRef((_props, _ref) => {
	const [subscribeButton, setSubscribeButton] = useState('')
	const [email, setEmail] = useState('')
	const [state, setState] = useState('idle')
	const [errorMsg, setErrorMsg] = useState(null)

	const subscribe = async (e) => {
	  e.preventDefault()

	  const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	  if(email === '') {
		  setState('Error')
		  setErrorMsg('Please fill out the field.')
	  } else if(email_regex.test(String(email).toLowerCase()) !== true) {
		setState('Error')
		setErrorMsg('Please enter your valid email.')
	  }
	  else {

	  	setState('Loading')
		fetch('/api/subscribe', {
			method: 'POST',
			cache: 'no-cache',
			body: JSON.stringify({ email }),
			referrerPolicy: 'no-referrer',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(async(response) => {
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
	  }

		setTimeout(function() {
			setState('')
			setSubscribeButton('')
			setErrorMsg('')
			setEmail('')
		}, 5000)
	}

	return (
	  <div className="h-full bg-red-200 bg-opacity-25 border-gray-400 flex flex-col justify-center p-8 m-8">
		<h4 className="text-xl md:text-3xl mt-2 font-bold">Subscribe to our newsletter</h4>
		<p className="text-sm md:text-l mt-2">
		  Get to notified as we publish articles on our progress and more
		  sent to your inbox. We&apos;ll send you an email once a month, no spam.
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
				className="p-2 border border-grey-light round text-grey-dark text-sm md:text-md h-auto"
				placeholder="Your email address"
			  />
			</div>
			<div className="form-input">
			  <button
				disabled={state === 'Loading'}
				type="submit"
				className="bg-black text-white rounded-sm h-auto text-sm p-2 md:p-3"
				onClick={subscribe}
			  >
				{ state === 'Loading' && (
					<span className="">
						<FontAwesomeIcon className="fa-spin" icon={['fas', 'spinner']} />
					</span>
				)}
				{subscribeButton === '' && state !== 'Loading' && (
					<p>Subscribe</p>
				)}
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
					<p className="text-sm md:text-l error-state">{errorMsg}</p>
				)}
		  {state === 'Success' && (
			<p className="text-sm md:text-l">Awesome, you&apos;ve been subscribed!</p>
		  )}
		</form>
	  </div>
	)
  })

Subscribe.displayName = "Newsletter-subscribe"
export default Subscribe
