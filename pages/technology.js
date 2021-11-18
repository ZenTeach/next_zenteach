import SiteLayout from '../components/SiteLayout'

const Technology = () => {
	return (
		<SiteLayout title="ZenTeach - Technology">
			<div className="md:h-full lg:h-full lg:mb-4 flex flex-col md:flex-row space-between max-w-4xl mx-auto mt-8 pt-8">
				<div className="md:w-1/2 w-2/5">
					<img
						alt="map of the brain"
						className="object-cover h-auto w-auto object-center rounded-lg "
						src="map_of_brain.gif"/>
				</div>
				<div className="m-1 md:w-1/2 py-6 px-2 md:px-0">
					<h1 className="md:text-center py-4 md:py-4">
						<span className="block text-xl md:text-3xl lg:text-4xl font-bold leading-none">
							A Map of the Brain
						</span>
					</h1>

					<p className="text-xs md:text-md lg:text-lg font-light tracking-snug md:tracking-normal lg:tracking-wide leading-snug md:leading-loose md:text-left text-black title-font">
						Our understanding of the world is based on a complex web of individual pieces of
						knowledge that are connected with each other. You can think of a giant mind map
						that connects all of your knowledge in meaningful ways.
					</p>
					<p className="text-xs md:text-md lg:text-lg font-light tracking-snug md:tracking-normal lg:tracking-wide leading-snug md:leading-loose md:text-left text-black title-font">
						A Cartographer’s job is to map the landscape. The landscape exists whether or not
						the Cartographer comes along, but having a map of the landscape allows its user
						to anticipate obstacles, plan cities and simply make better use of the land.
					</p>
					<p className="text-xs md:text-md lg:text-lg font-light tracking-snug md:tracking-normal lg:tracking-wide leading-snug md:leading-loose md:text-left text-black title-font">
						We like to think of ourselves as Cartographers of the brain. Our landscape
						is the complex web of knowledge and our map is a Knowledge Graph. Knowing how
						knowledge is connected allows us to do very exciting things.
					</p>
				</div>
			</div>
			<div className="md:h-full lg:h-full lg:mb-4 flex flex-col md:flex-row space-between max-w-4xl mx-auto mt-8 pt-8">
				<div className="md:w-1/2 w-2/5">
					<img
						alt="photosynthesis"
						className="object-cover h-auto w-auto object-center rounded-lg "
						src="Photosynthesis.gif"/>
				</div>
				<div className="m-1 md:w-1/2 py-6 px-2 md:px-0">
					<h1 className="md:text-center md:py-4 py-4">
						<span className="block text-xl md:text-3xl lg:text-4xl font-bold leading-none">
							Learning From the Best
						</span>
					</h1>
					<p className="text-xs md:text-md lg:text-lg font-light tracking-snug md:tracking-normal lg:tracking-wide leading-snug md:leading-loose md:text-left text-black title-font">
						What if we could take the experience of an expert teacher and make it
						accessible to novice teachers?
					</p>
					<p className="text-xs md:text-md lg:text-lg font-light tracking-snug md:tracking-normal lg:tracking-wide leading-snug md:leading-loose md:text-left text-black title-font">
						Through trial and error, teachers build Knowledge Graphs in their heads of the
						subject matter they teach. This takes years to achieve and is continuously refined.
						Any complex topic such as climate change or gene editing can be broken down into a
						list of simple facts, which are then sequenced in the most coherent manner.
					</p>
					<p className="text-xs md:text-md lg:text-lg font-light tracking-snug md:tracking-normal lg:tracking-wide leading-snug md:leading-loose md:text-left text-black title-font">
						By working with teachers we have managed to translate their mind-based Knowledge Graph
						for Science GCSE into a digital form. We can use the graph to help teachers plan lessons,
						track student progress and accelerate teaching proficiency.
					</p>
				</div>
			</div>
		</SiteLayout>
	);
}

export default Technology
