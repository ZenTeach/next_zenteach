import Link from 'next/link'

const Footer = ({}) => (
	<div className="h-full bg-red border-black border-3 p-8">
		<div className="sm:flex mx-auto mb-4 p-4">
			<div className="sm:w-1/4 w-1/4 h-auto">
				<div className="font-bold text-xl mb-2">Company</div>
				<ul className="list-reset leading-normal">
					<li className="hover:text-orange text-grey-darker">About Us</li>
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
			<div className="sm:w-1/2 w-1/2 sm:mt-0 mt-8 h-auto">
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
