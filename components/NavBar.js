
const NavBar = ({ children }) => (
	<div>
		<nav className="p-3 w-full bg-gray-100 border-b border-gray-300">
		<div className="flex flex-row justify-between space-x-96 ">
			<div className="mx-3">
				<div className="font-normal text-xl space-y-2 w-full mb-2">
					<a href="/">
						<img className="h-8 w-8 float-left" src="/logo.png" alt="" />
					</a>
					<span className="mx-2">ZenTeach</span>
				</div>
			</div>
			<div className="w-48 h-full"></div>
			<div className="float-right">
				<a
					className="inline-block ml-8 text-red-400 text-white p-2 hover:underline rounded font-small text-md overflow-hidden"
					rel="noreferrer"
					href="https://portal.zenteach.co.uk"
					target="_blank">
				Go to Portal</a>
		</div>
		</div>
		</nav>
  </div>
);

export default NavBar;
