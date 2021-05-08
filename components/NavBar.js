import Link from "next/link";

const NavBar = ({ children }) => (
	<div>
		<nav className="p-3 w-full bg-gray-100 border-b border-gray-300">
		<div className="flex flex-row justify-between space-x-96 ">
			<div className="mx-3">
				<div className="font-normal text-xl space-y-2 w-full mb-2">
					<Link href="/">
						<img className="h-8 w-8 float-left" src="/logo.png" alt="" />
					</Link>
					<span className="mx-2">ZenTeach</span>
				</div>
			</div>
			<div className="w-48 h-full"></div>
			<div className="float-right">
				<Link href="https://portal.zenteach.co.uk">
					<a
						className="inline-block ml-8 bg-red-400 text-white p-2 rounded font-small text-md overflow-hidden"
						href="https://portal.zenteach.co.uk"
						target="_blank">
					Go to Portal</a>
				</Link>
			</div>
		</div>
		</nav>
  </div>
);

export default NavBar;
