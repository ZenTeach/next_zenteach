import SiteLayout from '../components/SiteLayout'
import Feature from '../components/Feature'
import * as React from 'react'
import Subscribe from '../components/Subscribe'
import RequestDemo from '../components/RequestDemo'
class Index extends React.Component {
	async sendUserWebhook() {
		let email = document.querySelector('input#requester_email').value
		let data = {
			'email': email,
		}

		fetch('/api/demo_request', {
			method: 'POST',
			body: JSON.stringify(data)
		}).then(response => {
			if (response.status === 200) {
				document.querySelector('#demo_request_success').classList.toggle('hidden')
				setInterval(() => {
					document.querySelector('#demo_request_success').classList.toggle('hidden')
				}, 2500)
				document.querySelector('input#requester_email').value="Email..."
			}
			else {
				// report the error
			}
		})

	}

	render () {
		return(
			<SiteLayout title="ZenTeach">
				<div className="h-screen w-full mt-8 sm:mt-0 sm:py-12 px-8 flex lg:flex-row flex-col">
					<div className="lg:w-2/3 w-full lg:order-1 order-2 lg:h-full h-2/3">
						<iframe
							className="w-full h-4/5 mx-auto aspect-16/9 lg:aspect-video"
							src="https://www.youtube.com/embed/ezY2IoPzXo8"
							title="ZenTeach release video"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					</div>
					<div className="mt-8 lg:w-1/3 w-full lg:order-2 order-1 p-3 flex flex-col lg:justify-start">
						<h1 className="text-center mb-4 md:mx-auto md:w-full">
							<span className="block text-2xl md:text-5xl font-bold leading-none">
										A Revolutionary Formative Assessment Tool. For Teachers.
							</span>
						</h1>
						<span className='flex place-content-center'>
							{/* <a type="submit"
								className="bg-black text-white rounded-sm h-100 text-sm md:text-lg p-2"
								href="mailto:info@zenteach.co.uk?subject=Request%20access%20to%20portal">
								Request Demo
							</a>
							<div className="hidden" id="demo_request_success">
								<p className="text-xs" id="demo_request_success_message">Request submitted!</p>
							</div> */}
							<RequestDemo />
						</span>
					</div>
				</div>
					<Feature
						tagline="Find where students are lacking. Quickly."
						headline="Identify Knowledge Gaps"
						image="output.gif"
					>
						<p className="mx-4 lg:text-md md:text-xl text-sm font-light lg:tracking-wide tracking-normal text-left text-black title-font">
							Create custom quizzes on any topic you’re currently teaching.
							Access hundreds of high quality diagnostic questions that are
							designed by teachers to help you identify and target your students’ knowledge gaps.
						</p>
						<div className="flex-auto">
							<ul className="py-2 md:my-4 md:py-4 list-none">
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="feedback"
											src="extern/images/Diagnostic-Question-os9l6tr0gdu8eh0jwuz4i285b4wxcin96yoedabssk.png"/>
										<p>Access Hundreds of Diagnostic Questions</p>
									</span>
								</li>
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="custom quizzes"
											src="extern/images/Custom-Quizzes-os9l2s2112augkmlz7v74akp9spgc0rz8a3x6ozbhk.png"/>
										<p>Create Custom Quizzes</p>
									</span>
								</li>
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="knwoledge gap"
											src="extern/images/knowledge-gap-2-os9lbe8roe3gvw41nxy2z4atay8kw4zeexe5k07eg8.png"/>
										<p>Identify Knowledge Gaps</p>
									</span>
								</li>
							</ul>
							<a className="py-2 md:py-0" href="http://zenteach.co.uk/what-is-zenteach/">
								{/* TODO: Fix this */}
								<button className="inline-flex items-center font-semibold text-blue-700 md:m-3 md:mb-2 lg:mb-0 hover:text-blue-400">
										Learn More
										<svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
											width="20" height="20" fill="currentColor">
											<path fill="none" d="M0 0h24v24H0z" />
											<path
												d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
										</svg>
								</button>
							</a>
						</div>
					</Feature>

					<Feature
						tagline="Stop worrying about feedbacks"
						headline="Automatic & Constructive Feedback"
						image="Feedback.jpg"
					>
						<p className="mx-4 lg:text-md md:text-xl text-sm font-light lg:tracking-wide tracking-normal text-left text-black title-font">
							ZenTeach provides students with highly specific and constructive feedback so that students can target their knowledge gaps independently.
							Receive actionable quiz reports that support your lesson planning and access our growing library of quality resources that we have made so you don’t have to.
						</p>
						<div className="flex-auto">
							<ul className="py-2 md:my-4 md:py-4 list-none">
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="feedback"
											src="https://zenteach.co.uk/wp-content/uploads/elementor/thumbs/feedback-os9nvawnbaikaaj5s7p9pvy5sl4s6u8pfxgprap01g.png"
										/>
										<p>
											Automated Constructive Feedback
										</p>
									</span>
								</li>
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
										className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
										alt="report"
										src="extern/images/report-os9nv834olgwre3s8jdgbyicz98b6gda9mjw41m2ic.png"/>
										<p> Actionable Quiz Reports </p>
									</span>
								</li>
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="resources"
											src="extern/images/slides-os9nv4brx9bshs4gkaokhc90meo1vyjx1s7ual3e5i.png"/>
										<p>Access Lesson Resources</p>
									</span>
								</li>
							</ul>

							<a href="http://zenteach.co.uk/what-is-zenteach/">
								<button className="inline-flex items-center font-semibold text-blue-700 m-3 md:mb-2 lg:mb-0 hover:text-blue-400">
										Learn More
										<svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
											width="20" height="20" fill="currentColor">
											<path fill="none" d="M0 0h24v24H0z" />
											<path
												d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
										</svg>
								</button>
							</a>
						</div>
					</Feature>

					<Feature
						tagline="Build and administer quizzes. Fast."
						headline="Hands-off Tracking"
						image="hands_off_tracking.jpg"
					>
						<p className="mx-4 lg:text-md md:text-xl text-sm font-light lg:tracking-wide tracking-normal text-left text-black title-font">
							Mentally tracking individual student progress in detail is impossible.
							ZenTeach automatically re-quizzes students on the content they got wrong
							on previous quizzes, helping them along with learning resources. Only when
							knowledge gaps persist are they reported to the teacher who can address these personally.
						</p>

						<div className="flex-auto">
							<ul className="py-2 md:my-4 md:py-4 list-none">
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
									<img
										className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
										alt="re-quizzing"
										src="extern/images/Retest-os9nvdq5vsmf94f2bqx5fd8jkqqvtxjwgbf674ktis.png"/>
										<p>Re-Quizzing</p>
									</span>
								</li>
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="tracking knowledge gaps"
											src="extern/images/magnifying-glass-os9nvhhin4rkjk9lpsjnpcadya8copytsu1448f8tw.png"/>
										<p> Automatic Tracking of Knowledge Gaps </p>
									</span>
								</li>
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="knowledge gap insights"
											src="extern/images/insight-os9nvhhin4rkjk9lpsjnpcadya8copytsu1448f8tw.png"/>
										<p> Insights Into Persistent Knowledge Gaps </p>
									</span>
								</li>
							</ul>

							<a href="https://zenteach.co.uk/what-is-zenteach/">
									<button className="inline-flex items-center font-semibold text-blue-700 m-3 md:mb-2 lg:mb-0 hover:text-blue-400">
											Learn More
											<svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
												width="20" height="20" fill="currentColor">
												<path fill="none" d="M0 0h24v24H0z" />
												<path
													d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
											</svg>
									</button>
								</a>
						</div>
					</Feature>

					<Feature
						tagline="Plan your lesson easily."
						headline="Teach, Quiz, Feedback, Repeat"
						image="/teach_cycle.jpg"
					>
						<p className="mx-4 lg:text-md md:text-xl text-sm font-light lg:tracking-wide tracking-normal text-left text-black title-font">
							We want to support teachers at every point in the teaching and learning cycle.
							With the ZenTeach Knowledge Graph we can connect our content in more meaningful ways,
							supporting teachers at every point in the teaching and learning cycle as well as
							tracking student progress consistently over time.
						</p>
						<div className="flex-auto">
							<ul className="py-2 md:my-4 md:py-4 list-none">
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="lesson resources"
											src="extern/images/slides-os9nv4brv2dywvprucn0djb3kjggyde4r6zkzikj5g.png"/>
										<p>Teaching: Lesson Resources</p>
									</span>
								</li>
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="question library"
											src="extern/images/Diagnostic-Question-os9l6tqzwndv777l55ipz6jdv0xwiisqobvypaxsqc.png"/>
										<p>Quizzing: Diagnostic Question Library</p>
									</span>
								</li>
								<li className="text-sm md:text-lg font-medium text-black">
									<span className="flex flex-row w-full items-center">
										<img
											className="object-scale-down h-10 md:h-12 w-auto p-3 object-center rounded-lg"
											alt="feedback generation"
											src="extern/images/feedback-os9nvawnbaikaaj5s7p9pvy5sl4s6u8pfxgprap01g.png"/>
										<p>Feedback: Individual, Constructive, Specific</p>
									</span>
								</li>
							</ul>
							<a href="https://zenteach.co.uk/what-is-zenteach/">
									<button className="inline-flex items-center font-semibold text-blue-700 m-3 md:mb-2 lg:mb-0 hover:text-blue-400">
											Learn More
											<svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
												width="20" height="20" fill="currentColor">
												<path fill="none" d="M0 0h24v24H0z" />
												<path
													d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
											</svg>
									</button>
								</a>
						</div>
					</Feature>
					<Subscribe />
		  	</SiteLayout>
		)
	}
}

export default Index
