import SiteLayout from '../components/SiteLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutUs = () => {
	return (
		<SiteLayout title="ZenTeach - About">
			<div className="h-screen md:h-screen mt-4 pt-4">
				<div className="flex flex-row">
					<div className="w-full bg-gradient-to-r from-rose-50 to-rose-100">
						<div className="text-2xl md:text-5xl p-1 sm:p-3 text-center">Meet the Team</div>
					</div>
				</div>
				<div className="w-full flex flex-col md:flex-row md:justify-center md:m-5 md:p-8 flex">
					<div className="max-w-sm w-auto h-1/5 mx-4 my-4 flex flex-col justify-center overflow-hidden">
						<div className="self-center">
							<img className="object-cover w-32 h-auto object-center rounded-full p-2 justify-center"
							src="philipp.jpg" alt="Philipp" />
						</div>
						<div className="px-2 py-2 md:px-6 md:py-4 text-center">
							<div className="font-bold text-sm md:text-md md:text-xl sm:mb-2">Philipp Herzberg</div>
							<span className="font-normal text-gray-500 md:font-thin text-xs md:text-md mb-2">Business & Marketing</span>
						</div>
						<div className="px-2 pt-2 md:px-6 md:pt-4 md:pb-2 w-full flex justify-center text-center">
							<div className="md:p-2 px-2 content-around space-between">
									<a href="https://twitter.com/mikioherzberg"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "twitter"]} />
									</a>
							</div>
							<div className="md:p-2 px-2 content-around space-around">
									<a
										href="https://www.linkedin.com/in/philippherzberg/"
										rel="noreferrer"
										target="_blank">
										<FontAwesomeIcon icon={["fab", "linkedin"]} />
									</a>
							</div>
						</div>
					</div>
					<hr className="md:display-none" />
					<div className="max-w-sm w-auto h-1/5 mx-4 my-4 flex flex-col justify-center overflow-hidden">
						<div className="self-center">
							<img
								className="object-cover w-32 h-auto object-center rounded-full p-2 justify-center"
								src="nate.png"
								alt="Natnael" />
						</div>

						<div className="px-2 py-2 md:px-6 md:py-4 text-center">
							<div className="font-bold text-sm md:text-md md:text-xl sm:mb-2">Natnael Getahun</div>
							<span className="font-normal text-gray-500 md:font-thin text-xs md:text-md mb-2">Tech & Product</span>
						</div>
						<div className="px-2 pt-2 md:px-6 md:pt-4 md:pb-2 w-full flex justify-center text-center">
							<div className="md:p-2 px-2 content-around space-between">
								<a href="https://twitter.com/babyodainaonsie"
									rel="noreferrer"
									target="_blank">
									<FontAwesomeIcon icon={["fab", "twitter"]} />
								</a>
							</div>
							<div className="md:p-2 px-2 content-around space-around">
								<a href="https://www.linkedin.com/in/ngetahun/"
									rel="noreferrer"
									target="_blank">
									<FontAwesomeIcon icon={["fab", "linkedin"]} />
								</a>
							</div>
							<div className="md:p-2 px-2 content-around space-around">
								<a href="https://github.com/ngetahun"
									rel="noreferrer"
									target="_blank">
									<FontAwesomeIcon icon={["fab", "github"]} />
								</a>
							</div>

						</div>
					</div>
				</div>
			</div>
		</SiteLayout>
	);
}

export default AboutUs
