import Link from "next/link";

const NavBar = ({ children }) => (
  <div className="bg-white antialiased">
    <div>
      <div>
        <div className="max-w-xl mx-auto px-8">
          <nav>
            <div className="py-4 w-100 flex-shrink-0 flex items-center">
							<div className="float-left">
            		<img className="h-8 w-8 float-left" src="/logo.svg" alt="" />
							</div>
							<div className="float-right">
								<Link href="/">
									<a className="ml-8 font-medium text-gray-900">Home</a>
								</Link>
								<Link href="/features">
									<a className="ml-8 font-medium text-gray-900">Features</a>
								</Link>
								{/* <Link href="/technology">
									<a className="ml-8 font-medium text-gray-900">Technology</a>
								</Link>
								<Link href="/vision">
									<a className="ml-8 font-medium text-gray-900">Vision</a>
								</Link>
								<Link href="/news">
									<a className="ml-8 font-medium text-gray-900">News</a>
								</Link> */}
								<Link href="/contact">
									<a className="ml-8 font-medium text-gray-900">Contact</a>
								</Link>
								<Link href="/portal">
									{/* <button className="inline-block w-50 ml-8 font-small bg-green-500 text-gray-900">Go to Portal</button> */}
									<button className="inline-block ml-8 bg-green-500 text-white p-2 rounded font-small text-sm overflow-hidden">Go to Portal</button>
								</Link>
							</div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>
  </div>
);

export default NavBar;
