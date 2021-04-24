import Link from "next/link";

const NavBar = ({ children }) => (
	<div>
		<nav className="py-8 px-8 w-100 flex-shrink-0 flex justify-center">
		<div>
			<div className="float-left">
				<img className="h-8 w-8 float-left" src="/logo.png" alt="" />
			</div>
			<div className="float-right">
				<Link href="/">
					<a className="ml-8 font-medium text-gray-900">Home</a>
				</Link>
				<Link href="/features">
					<a className="ml-8 font-medium text-gray-900">Features</a>
				</Link>
				<Link href="/contact">
					<a className="ml-8 font-medium text-gray-900">Contact</a>
				</Link>
				<Link href="/portal">
					<button className="inline-block ml-8 bg-red-400 text-white p-2 rounded font-small text-sm overflow-hidden">Go to Portal</button>
				</Link>
			</div>
		</div>
		</nav>
    <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>
  </div>
);

export default NavBar;
