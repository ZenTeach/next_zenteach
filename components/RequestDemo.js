import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useRef, useEffect, forwardRef } from 'react'

const RequestDemo = forwardRef((_props, _ref) => {
	const [requestDemoButton, setRequestDemoButton] = useState('')
	const [requesterEmail, setrequesterEmail] = useState('')
	const [state, setState] = useState('idle')
	const [requestDemoErrorMsg, setRequestDemoErrorMsg] = useState(null)
	const [_token, setToken] = useState(null);

	const onError = (err) => {
		setToken(null)
		setState('Error')
		setErrorMsg('There was an error processing your request.', err)
		setTimeout(function() {
			setState('')
			setErrorMsg('')
		}, 5000)
	}

	const onSubmit = async () => {
	  const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	  if(requesterEmail === '') {
		  setState('Error')
		  setRequestDemoErrorMsg('Please fill out the field.')
	  }
    else if(email_regex.test(String(requesterEmail).toLowerCase()) !== true) {
		  setState('Error')
		  setRequestDemoErrorMsg('Please enter your valid email.')
	  }
	  else {
		  setState('Loading')
      let url = process.env.NEXT_PUBLIC_SUPABASE_URL
      let auth_token = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
		  const response = await fetch(`${url}/request_demo`, {
			  body: JSON.stringify({ email: requesterEmail }),
        headers: { Authorization: `Bearer ${auth_token}` }
		  })
		  if (response.status >= 400) {
		    setState('Error')
		    setRequestDemoButton('error')
		    let data = await response.json()
		    setRequestDemoErrorMsg(data.error || 'We are facing some technical difficulties processing your email. Please try again in few moments.')
		  }
		  else {
			  setState('Success')
			  setRequestDemoButton('success')
			  setrequesterEmail('')
		  }
	  }
	  setTimeout(function() {
		  setState('')
		  setRequestDemoButton('')
		  setRequestDemoErrorMsg('')
		  setrequesterEmail('')
	  }, 5000)
	}

	return (
	  <div className="h-full bg-opacity-25 border-gray-400 flex flex-col justify-center">
		<form className="rounded">
		  <div className="mt-4 flex text-center">
			<div className="form-input">
			  <input
				required
				id="email-input"
				name="email"
				type="email"
				value={requesterEmail}
				onChange={(e) => setrequesterEmail(e.target.value)}
				className="p-2 border border-grey-light round text-grey-dark text-sm md:text-md h-full"
				placeholder="Your email address"
			  />
			</div>
			<div className="form-input">
			  <button
				disabled={state === 'Loading'}
				type="submit"
				className="bg-black text-white rounded-sm h-auto text-sm p-1 md:p-3"
				onClick={onSubmit}
			  >
				{ state === 'Loading' && (
					<span className="">
						<FontAwesomeIcon className="fa-spin" icon={['fas', 'spinner']} />
					</span>
				)}
				{requestDemoButton === '' && state !== 'Loading' && (
					<p className='md:text-sm text-xs'>Request Demo</p>
				)}
				{requestDemoButton === 'success' && (
					<span className="mx-2">
						<FontAwesomeIcon className="fill-current text-green" icon={["fas", "check"]}/>
					</span>
				)}
				{requestDemoButton === 'error' && (
					<span className="mx-2">
						<FontAwesomeIcon className="fill-current text-red" icon={["fas", "times"]}/>
					</span>
				)}
			  </button>
			</div>
		  </div>
		  {state === 'Error' && (
					<p className="text-sm md:text-l error-state">{requestDemoErrorMsg}</p>
				)}
		  {state === 'Success' && (
			<p className="text-sm md:text-l">Great!, we&apos;ll reach out to you soon!</p>
		  )}
		</form>
	  </div>
	)
  })

RequestDemo.displayName = "Request Demo"
export default RequestDemo
