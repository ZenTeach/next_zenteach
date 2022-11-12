import Link from 'next/link'

const NavBar = ({ children }) => (
	<div>
		<nav className="p-3 lg:w-full sm:w-full md:w-full bg-gray-100 border-b border-gray-300">
		<div className="flex flex-row justify-between lg:space-x-96 md:space-x-48 space-x-12">
			<div className="mx-3 md:w-1/2 md:py-3">
				<div className="font-normal md:text-xl text-sm space-y-2 w-full mb-2 mt-2 md:mt-0 md:ml-6">
					<Link passHref href="/">
						<img className="h-4 w-4 md:h-8 md:w-8 float-left" src="/logo.png" alt="" />
					</Link>
					<span className="mx-2">ZenTeach</span>
				</div>
			</div>
			<div className="w-1/3 md:w-1/2 py-2 text-center flex-auto lg:text-right lg:py-2 lg:px-6 lg:w-1/3">
                <Link href="/vision">
                    <a
					    className="inline-block lg:ml-2 md:ml-24 lg:text-red-400 text-white bg-red-400 lg:bg-gray-100 lg:p-1 md:p-4 p-2 hover:underline rounded font-small text-xs md:text-md lg:text-base lg:font-bold overflow-hidden">
				        Why Zenteach?</a>
    			</Link>
				<a
					className="inline-block lg:ml-2 md:ml-24 lg:text-red-400 text-white bg-red-400 lg:bg-gray-100 lg:p-1 md:p-4 p-2 hover:underline rounded font-small text-xs md:text-md lg:text-base lg:font-bold overflow-hidden"
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
