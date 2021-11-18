import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Link from 'next/link'

class Footer extends React.Component {
	render() {
		return (
			<div className="h-full w-full bg-gray-100 bg-opacity-25 border-t border-gray-400 flex place-content-center p-2 md:p-4">
				<div className="md:w-1/2 w-1/2 h-auto justify-content-center md:mx-8 md:px-8 flex-shrink">
					<div className="font-normal text-sm md:text-xl md:space-y-2 w-full mb-2">
						<Link passHref href="/">
							<img className="h-4 md:h-8 w-4 md:w-8 float-left" src="/logo.png" alt="" />
						</Link>
						<span className="mx-2">ZenTeach</span>
					</div>

					<div className="my-2 md:my-6 text-sm md:text-l">
						<p>Follow us on</p>
						<div className="space-x-2 inline-flex flex-row justify-start w-1/2">
							<span>
								<Link passHref href="https://www.twitter.com/getzenteach"
									rel="noreferrer"
									target="_blank">
									<a>
										<FontAwesomeIcon icon={["fab", "twitter"]}/>
									</a>
								</Link>
							</span>
							<span>
								<Link passHref href="https://www.linkedin.com/company/zenteach"
									rel="noreferrer"
									target="_blank">
									<a>
										<FontAwesomeIcon icon={["fab", "linkedin"]}/>
									</a>
								</Link>
							</span>
							<span>
								<Link passHref href="https://github.com/ZenTeach"
									rel="noreferrer"
									target="_blank">
									<a>
										<FontAwesomeIcon icon={["fab", "github"]}/>
									</a>
								</Link>
							</span>
							<span>
								<Link passHref href="https://zenteach.medium.com/"
									rel="noreferrer"
									target="_blank">
									<a>
										<FontAwesomeIcon icon={["fab", "medium"]}/>
									</a>
								</Link>
							</span>
							<span>
								<Link passHref href="https://www.youtube.com/channel/UCXmgBfoSDoTmurNW02Z-lTA/"
									rel="noreferrer"
									target="_blank">
									<a>
										<FontAwesomeIcon icon={["fab", "youtube"]}/>
									</a>
								</Link>
							</span>
						</div>
					</div>
					<div className="my-2 md:my-6 text-sm md:text-l">
						<p>Or drop us line at</p>
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
				<div className="md:w-1/2 w-1/2 h-auto justify-content-center md:mx-8 md:px-8 flex-shrink">
					<div className="font-bold text-md md:text-xl mb-2">Company</div>
					<ul className="list-reset leading-normal">
						<li className="hover:text-orange text-grey-darker">
							<Link passHref href='/about_us'>
								<span className="inline-block cursor-pointer bg-white border-none text-red text-sm md:text-l rounded-lg leading-tight">
									About Us
								</span>
							</Link>
						</li>
						<li className="hover:text-orange text-grey-darker">
							<Link passHref href='/vision'>
								<span className="inline-block cursor-pointer bg-white border-none text-red text-sm md:text-l rounded-lg leading-tight">
									Vision
								</span>
							</Link>
						</li>
						<li className="hover:text-orange text-grey-darker">
							<Link passHref href='/technology'>
								<span className="inline-block cursor-pointer bg-white border-none text-red text-sm md:text-l rounded-lg leading-tight">
								Technology
								</span>
							</Link>
						</li>
						<li className="hover:text-orange text-grey-darker">
							<Link passHref href='/terms_and_conditions'>
								<span className="inline-block cursor-pointer bg-white border-none text-red text-sm md:text-l rounded-lg leading-tight">
									Terms and Conditions
								</span>
							</Link>
						</li>
						<li className="hover:text-orange text-grey-darker">
							<Link passHref href="/privacy_policy">
								<span className="inline-block cursor-pointer bg-white border-none text-red text-sm md:text-l rounded-lg leading-tight">
									Privacy Policy
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}


export default Footer
