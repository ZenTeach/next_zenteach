import * as React from 'react'

export default class Feature extends React.Component {
	render() {
		return (
			<section className="h-screen text-gray-700 body-font">
				<div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
					<div
						className="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 ">
						<h2 className="mb-1 text-xs font-medium tracking-widest text-blue-500black title-font">{this.props.tagline || "Your tagline"}</h2>
						<h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
							{this.props.headline || "Medium length display headline to convert."}
						</h1>
						<div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
								{this.props.children}
							</div>
						</div>
						<div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 p-24">
							<img
							 alt="hero"
							 className="object-cover h-auto w-auto object-center rounded-lg"
							 src={this.props.image} />
						</div>
				</div>
			</section>

		);
	}
}
