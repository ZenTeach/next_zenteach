import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
	apiKey: process.env.apiKey,
	server: "us7",
});

const serverAddress = process.env.server
const apiKey = process.env.apiKey

class Footer extends React.Component {
	constructor(props) {
		super(props)
		// this.state = {
		// 	newsletterSubscribed
		// }
	}

	async sendUserToMailchimp() {
		let email = document.querySelector('input[name="subscriber_email"]').text
		let data = {
			'email_address': email,
			'email_type': 'text',
			'status': 'subscribed',
			'interests': {
				'id': '2023812ba2'
			}
		}
		let audienceId = localStorage.getItem('ma_audience_list')
		if (audienceId ===  null) {
			// let audienceLists = await mailchimp.lists.getAllLists()
			let basicAuth = `anystring:${apiKey}`
			// NOTE: This is not working because mailchimp's API doesn't response
			fetch(
				`https://${serverAddress}.api.mailchimp.com/3.0/lists`, {
					method: 'GET',
					mode: 'cors',
					credentials: 'include',
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Credentials': 'true',
						'Content-Type': 'application/json',
						'Authorization': `Basic ${btoa(basicAuth)}`
						// 'Authorization': `apikey ${apiKey}`
					}
				}
			).then(response => {
				if(!response.ok) {
					console.error("Got error, ", response.statusText)
				}
				else {
					audienceId = response.json()['lists'][0]['id']
					localStorage.setItem('ma_audience_list', audienceId)
				}
			})
		}
		// let response = await mailchimp.lists.batchListMembers(audienceId, {
		// 	members: [data],
		// });

		console.log(audienceId)
	}

	render() {
		return (
			<div className="h-full bg-gray-100 bg-opacity-25 border-t border-gray-400 flex justify-around p-8">
				<div className="sm:flex mb-4 p-4">
					<div className="sm:w-1/4 md:w-1/3 w-1/3 h-auto flex-shrink">
						<div className="font-normal text-xl space-y-2 w-full mb-2">
							<a href="/">
								<img className="h-8 w-8 float-left" src="/logo.png" alt="" />
							</a>
							<span className="mx-2">ZenTeach</span>
						</div>

						<div className="my-6">
							<p>Follow us on</p>
							<div className="space-x-2 inline-flex flex-row justify-between w-1/2">
								<span>
									<a href="https://www.twitter.com/getzenteach"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "twitter"]}/>
									</a>
								</span>
								<span>
									<a href="https://www.linkedin.com/company/zenteach"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "linkedin"]}/>
									</a>
								</span>
								<span>
									<a href="https://github.com/ZenTeach"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "github"]}/>
									</a>
								</span>
								<span>
									<a href="https://zenteach.medium.com/"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "medium"]}/>
									</a>
								</span>
							</div>
						</div>
						<div className="my-6">
							<p>Or drop us a line at</p>
							<a
								className="text-md text-black underline"
								href="mailto:info@zenteach.co.uk"
								target="_blank" rel="noreferrer"
							>
								info@zenteach.co.uk
							</a>
						</div>
					</div>
					<div className="sm:w-1/4 md:w-1/3 w-1/3 h-auto">
						<div className="font-bold text-xl mb-2">Company</div>
						<ul className="list-reset leading-normal">
							<li className="hover:text-orange text-grey-darker">
								<a href='/about_us'>
									<span className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
										About Us
									</span>
								</a>
							</li>
							<li className="hover:text-orange text-grey-darker">
								<a href='/vision'>
									<span className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
										Vision
									</span>
								</a>
							</li>
							<li className="hover:text-orange text-grey-darker">
								<a href='/technology'>
									<span className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
									Technology
									</span>
								</a>
							</li>
							<li className="hover:text-orange text-grey-darker">
								<a href='/terms_and_conditions'>
									<span className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
										Terms and Conditions
									</span>
								</a>
							</li>
							<li className="hover:text-orange text-grey-darker">
								<a href="/privacy_policy">
									<span className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
										Privacy Policy
									</span>
								</a>
							</li>
						</ul>
					</div>
					<div className="sm:w-1/2 md:w-1/3 w-1/3 sm:mt-0 mt-8 h-auto">
						<div className="text-2xl font-bold mb-2">Newsletter</div>
						<p className="text-grey-darker leading-normal">Join our community and stay in touch with us!</p>
						<div className="mt-4 flex">
							<input
								type="text"
								name="subscriber_email"
								className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address" />
							<button
								className="bg-black text-white rounded-sm h-auto text-xs p-3"
								onClick={this.sendUserToMailchimp}

							>Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Footer
