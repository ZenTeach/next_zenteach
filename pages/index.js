import SiteLayout from '../components/SiteLayout'
import Feature from '../components/Feature'
import Link from 'next/link'

const Index = () => (
  <SiteLayout>
    <div className="h-screen mt-8 sm:mt-0 sm:py-12 max-w-xl mx-auto px-8">
      <h1 className="text-center">
        <span className="block text-5xl font-bold leading-none">
					A Revolutionary Formative Assessment Tool for Teachers
        </span>
      </h1>
      <div className="mt-12 text-center">
        <Link href="http://eepurl.com/hmou3n">
          <a className="inline-block bg-white border-2 text-red font-medium rounded-lg px-6 py-4 leading-tight">
            Request Demo
          </a>
        </Link>
      </div>
    </div>
		<Feature
			tagline="Find where students are lacking. Quickly."
			headline="Identify Knowledge Gaps"
			image="output.gif"
		>
			<p className="mx-4 text-sm font-light tracking-wide text-left text-black title-font">
				Create custom quizzes on any topic you’re currently teaching.
				Access hundreds of high quality diagnostic questions that are
				designed by teachers to help you identify and target your students’ knowledge gaps.
			</p>
			<div className="flex-auto">
				<ul className="my-4 py-4 list-none">
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="feedback"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/Diagnostic-Question-os9l6tr0gdu8eh0jwuz4i285b4wxcin96yoedabssk.png"/>
							<p>Access Hundreds of Diagnostic Questions</p>
						</span>
					</li>
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="custom quizzes"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/Custom-Quizzes-os9l2s2112augkmlz7v74akp9spgc0rz8a3x6ozbhk.png"/>
							<p>Create Custom Quizzes</p>
						</span>
					</li>
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="knwoledge gap"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/knowledge-gap-2-os9lbe8roe3gvw41nxy2z4atay8kw4zeexe5k07eg8.png"/>
							<p>Identify Knowledge Gaps</p>
						</span>
					</li>
				</ul>
				<Link href="http://zenteach.co.uk/what-is-zenteach/">
					{/* TODO: Fix this */}
					<button className="inline-flex items-center font-semibold text-blue-700 m-3 md:mb-2 lg:mb-0 hover:text-blue-400">
							Learn More
							<svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
								width="20" height="20" fill="currentColor">
								<path fill="none" d="M0 0h24v24H0z" />
								<path
									d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
							</svg>
					</button>
				</Link>
			</div>
		</Feature>

		<Feature
			tagline="Stop worrying about feedbacks"
			headline="Automatic & Constructive Feedback"
			image="Feedback.jpg"
		>
			<p className="mx-4 text-sm font-light tracking-wide text-left text-black title-font">
				ZenTeach provides students with highly specific and constructive feedback so that students can target their knowledge gaps independently.
				Receive actionable quiz reports that support your lesson planning and access our growing library of quality resources that we have made so you don’t have to.
			</p>
			<div className="flex-auto">
				<ul className="my-4 py-4 list-none">
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="feedback"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/feedback-os9nvawnbaikaaj5s7p9pvy5sl4s6u8pfxgprap01g.png"
							/>
							<p>
								Automated Constructive Feedback
							</p>
						</span>
					</li>
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
							className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
							alt="report"
							src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/report-os9nv834olgwre3s8jdgbyicz98b6gda9mjw41m2ic.png"/>
							<p> Actionable Quiz Reports </p>
						</span>
					</li>
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="resources"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/slides-os9nv4brx9bshs4gkaokhc90meo1vyjx1s7ual3e5i.png"/>
							<p>Access Lesson Resources</p>
						</span>
					</li>
				</ul>

				<Link href="http://zenteach.co.uk/what-is-zenteach/">
					<button className="inline-flex items-center font-semibold text-blue-700 m-3 md:mb-2 lg:mb-0 hover:text-blue-400">
							Learn More
							<svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
								width="20" height="20" fill="currentColor">
								<path fill="none" d="M0 0h24v24H0z" />
								<path
									d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
							</svg>
					</button>
				</Link>
			</div>
		</Feature>

		<Feature
			tagline="Build and administer quizzes. Fast."
			headline="Hands-off Tracking"
			image="hands_off_tracking.jpg"
		>
			<p className="mx-4 text-sm font-light tracking-wide text-left text-black title-font">
				Mentally tracking individual student progress in detail is impossible.
				ZenTeach automatically re-quizzes students on the content they got wrong
				on previous quizzes, helping them along with learning resources. Only when
				knowledge gaps persist are they reported to the teacher who can address these personally.
			</p>

			<div className="flex-auto">
				<ul className="my-4 py-4 list-none">
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
						<img
							className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
							alt="re-quizzing"
							src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/Retest-os9nvdq5vsmf94f2bqx5fd8jkqqvtxjwgbf674ktis.png"/>
							<p>Re-Quizzing</p>
						</span>
					</li>
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="tracking knowledge gaps"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/magnifying-glass-os9nvhhin4rkjk9lpsjnpcadya8copytsu1448f8tw.png"/>
							<p> Automatic Tracking of Knowledge Gaps </p>
						</span>
					</li>
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="knowledge gap insights"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/insight-os9nvhhin4rkjk9lpsjnpcadya8copytsu1448f8tw.png"/>
							<p> Insights Into Persistent Knowledge Gaps </p>
						</span>
					</li>
				</ul>

				<Link href="https://zenteach.co.uk/what-is-zenteach/">
						<button className="inline-flex items-center font-semibold text-blue-700 m-3 md:mb-2 lg:mb-0 hover:text-blue-400">
								Learn More
								<svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
									width="20" height="20" fill="currentColor">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
								</svg>
						</button>
					</Link>
			</div>
		</Feature>

		<Feature
			tagline="Plan your lesson easily."
			headline="Teach, Quiz, Feedback, Repeat"
			image="teach_cycle.jpg"
		>
			<p className="mx-4 text-sm font-light tracking-wide text-left text-black title-font">
				We want to support teachers at every point in the teaching and learning cycle.
				With the ZenTeach Knowledge Graph we can connect our content in more meaningful ways,
				supporting teachers at every point in the teaching and learning cycle as well as
				tracking student progress consistently over time.
			</p>
			<div className="flex-auto">
				<ul className="my-4 py-4 list-none">
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="lesson resources"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/slides-os9nv4brv2dywvprucn0djb3kjggyde4r6zkzikj5g.png"/>
							<p>Teaching: Lesson Resources</p>
						</span>
					</li>
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="question library"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/Diagnostic-Question-os9l6tqzwndv777l55ipz6jdv0xwiisqobvypaxsqc.png"/>
							<p>Quizzing: Diagnostic Question Library</p>
						</span>
					</li>
					<li className="text-lg font-medium text-black">
						<span className="flex flex-row w-full items-center">
							<img
								className="object-scale-down h-12 w-auto p-3 object-center rounded-lg"
								alt="feedback generation"
								src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/feedback-os9nvawnbaikaaj5s7p9pvy5sl4s6u8pfxgprap01g.png"/>
							<p>Feedback: Individual, Constructive, Specific</p>
						</span>
					</li>
				</ul>
				<Link href="https://zenteach.co.uk/what-is-zenteach/">
						<button className="inline-flex items-center font-semibold text-blue-700 m-3 md:mb-2 lg:mb-0 hover:text-blue-400">
								Learn More
								<svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
									width="20" height="20" fill="currentColor">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
								</svg>
						</button>
					</Link>
			</div>
		</Feature>
  </SiteLayout>
)

export default Index