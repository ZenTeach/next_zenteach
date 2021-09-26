import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Link from 'next/link'

class Footer extends React.Component {
	render() {
		return (
			<div className="h-full bg-gray-100 bg-opacity-25 border-t border-gray-400 flex justify-around p-8">
				<div className="sm:flex mb-4 p-4">
					<div className="sm:w-1/4 md:w-1/3 w-1/3 h-auto flex-shrink">
						<div className="font-normal text-xl space-y-2 w-full mb-2">
							<Link passHref href="/">
								<img className="h-8 w-8 float-left" src="/logo.png" alt="" />
							</Link>
							<span className="mx-2">ZenTeach</span>
						</div>

						<div className="my-6">
							<p>Follow us on</p>
							<div className="space-x-2 inline-flex flex-row justify-between w-1/2">
								<span>
									<Link passHref href="https://www.twitter.com/getzenteach"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "twitter"]}/>
									</Link>
								</span>
								<span>
									<Link passHref href="https://www.linkedin.com/company/zenteach"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "linkedin"]}/>
									</Link>
								</span>
								<span>
									<Link passHref href="https://github.com/ZenTeach"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "github"]}/>
									</Link>
								</span>
								<span>
									<Link passHref href="https://zenteach.medium.com/"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "medium"]}/>
									</Link>
								</span>
							</div>
						</div>
						<div className="my-6">
							<p>Or drop us Link line at</p>
							<Link
								passHref
								className="text-md text-black underline"
								href="mailto:info@zenteach.co.uk"
								target="_blank" rel="noreferrer"
							>
								info@zenteach.co.uk
							</Link>
						</div>
					</div>
					<div className="sm:w-1/4 md:w-1/3 w-1/3 h-auto">
						<div className="font-bold text-xl mb-2">Company</div>
						<ul className="list-reset leading-normal">
							<li className="hover:text-orange text-grey-darker">
								<Link passHref href='/about_us'>
									<span className="inline-block cursor-pointer bg-white border-none text-red font-medium rounded-lg leading-tight">
										About Us
									</span>
								</Link>
							</li>
							<li className="hover:text-orange text-grey-darker">
								<Link passHref href='/vision'>
									<span className="inline-block cursor-pointer bg-white border-none text-red font-medium rounded-lg leading-tight">
										Vision
									</span>
								</Link>
							</li>
							<li className="hover:text-orange text-grey-darker">
								<Link passHref href='/technology'>
									<span className="inline-block cursor-pointer bg-white border-none text-red font-medium rounded-lg leading-tight">
									Technology
									</span>
								</Link>
							</li>
							<li className="hover:text-orange text-grey-darker">
								<Link passHref href='/terms_and_conditions'>
									<span className="inline-block cursor-pointer bg-white border-none text-red font-medium rounded-lg leading-tight">
										Terms and Conditions
									</span>
								</Link>
							</li>
							<li className="hover:text-orange text-grey-darker">
								<Link passHref href="/privacy_policy">
									<span className="inline-block cursor-pointer bg-white border-none text-red font-medium rounded-lg leading-tight">
										Privacy Policy
									</span>
								</Link>
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
