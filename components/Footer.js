import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({}) => (
	<div className="h-full bg-red flex justify-around p-8">
		<div className="sm:flex mb-4 p-4">
			<div className="sm:w-1/4 md:w-1/3 w-1/3 h-auto flex-shrink">
				<div className="font-bold text-xl space-y-2 w-full mb-2">
					<Link href="/">
						<img className="h-8 w-8 float-left" src="/logo.png" alt="" />
					</Link>
					<span className="mx-2">ZenTeach</span>
				</div>

				<div className="my-6">
					<p>Follow us on</p>
					<div className="space-x-2 inline-flex flex-row justify-between w-1/2">
						<span>
							<a href="https://www.twitter.com/getzenteach" target="_blank">
								<FontAwesomeIcon icon={["fab", "twitter"]}/>
							</a>
						</span>
						<span>
							<a href="https://www.linkedin.com/company/zenteach" target="_blank">
								<FontAwesomeIcon icon={["fab", "linkedin"]}/>
							</a>
						</span>
						<span>
							<a href="https://github.com/ZenTeach" target="_blank">
								<FontAwesomeIcon icon={["fab", "github"]}/>
							</a>
						</span>
						<span>
							<a href="https://zenteach.medium.com/" target="_blank">
								<FontAwesomeIcon icon={["fab", "medium"]}/>
							</a>
						</span>
					</div>
				</div>
			</div>
			<div className="sm:w-1/4 md:w-1/3 w-1/3 h-auto">
				<div className="font-bold text-xl mb-2">Company</div>
				<ul className="list-reset leading-normal">
					<li className="hover:text-orange text-grey-darker">
						<Link href='/about_us'>
							<a className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
								About Us
							</a>
						</Link>
					</li>
					<li className="hover:text-orange text-grey-darker">
						<Link href='/vision'>
							<a className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
								Vision
							</a>
						</Link>
					</li>
					<li className="hover:text-orange text-grey-darker">
						<Link href='/technology'>
							<a className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
							Technology
							</a>
						</Link>
					</li>
					<li className="hover:text-orange text-grey-darker">
						<Link href='/terms_and_conditions'>
							<a className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
								Terms and Conditions
							</a>
						</Link>
					</li>
					<li className="hover:text-orange text-grey-darker">
						<Link href="/privacy_policy">
						<a className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
							Privacy Policy
						</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="sm:w-1/2 md:w-1/3 w-1/3 sm:mt-0 mt-8 h-auto">
				<div className="text-2xl font-bold mb-2">Newsletter</div>
				<p className="text-grey-darker leading-normal">Join our community and stay in touch with us!</p>
				<div className="mt-4 flex">
					<input type="text" className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address" />
					<button className="bg-black text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
				</div>
			</div>
		</div>
	</div>
);

export default Footer
