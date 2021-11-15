import * as React from 'react'

export default class Feature extends React.Component {
	render() {
		return (
			<section className="h-screen md:h-full text-gray-700 body-font">
				<div className="container flex items-center lg:px-5 px-8 py-5 mx-auto">
					<div
						className="flex flex-col w-full pt-0 mb-16 text-left flex-grow w-1/2 xl:mr-20 md:pr-12 items-start mb-0">
						<h2 className="mb-1 text-xs md:text-l lg:text-xl font-medium tracking-widest text-blue-500black title-font">{this.props.tagline || "Your tagline"}</h2>
						<h1 className="mb-8 text-xl md:text-3xl lg:text-5xl font-bold lg:tracking-normal tracking-tighter text-left text-black title-font">
							{this.props.headline || "Medium length display headline to convert."}
						</h1>
						<div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
								{this.props.children}
							</div>
						</div>
						<div className="w-full lg:w-5/6 lg:max-w-lg w-1/2 lg:p-24 p-4">
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
