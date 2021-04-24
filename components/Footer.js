import Link from 'next/link'

const Footer = ({}) => (
	<div className="h-full bg-grey border-black border-3 p-8">
		<div className="sm:flex mb-4 p-4">
			<div className="sm:w-1/4 w-1/4 h-auto">
				<div className="font-bold mb-2">Company</div>
				<ul className="list-reset leading-normal">
					<li className="hover:text-orange text-grey-darker">About Us</li>
					<li className="hover:text-orange text-grey-darker">Vision</li>
					<li className="hover:text-orange text-grey-darker">
						<Link href='/technology'>
							<a className="inline-block bg-white border-none text-red font-medium rounded-lg leading-tight">
							Technology
							</a>
						</Link>
					</li>
					<li className="hover:text-orange text-grey-darker">Terms of Service</li>
					<li className="hover:text-orange text-grey-darker">Privacy</li>
				</ul>
			</div>
			<div className="sm:w-1/4 w-1/4 h-auto sm:mt-0 mt-8">
				<div className="text-blue mb-2">Blue</div>
				<ul className="list-reset leading-normal">
					<li className="hover:text-blue text-grey-darker">One</li>
					<li className="hover:text-blue text-grey-darker">Two</li>
					<li className="hover:text-blue text-grey-darker">Three</li>
				</ul>
				<div className="text-blue-light mb-2 mt-4">Blue-light</div>
				<ul className="list-reset leading-normal">
					<li className="hover:text-blue-light text-grey-darker">One</li>
					<li className="hover:text-blue-light text-grey-darker">Two</li>
					<li className="hover:text-blue-light text-grey-darker">Three</li>
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
