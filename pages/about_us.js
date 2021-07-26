import SiteLayout from '../components/SiteLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutUs = () => {
	return (
		<SiteLayout>
			<div className="flex flex-row">
				<div className="w-full bg-gradient-to-r from-rose-50 to-rose-100">
					<div className="text-5xl text-center">Meet the Team</div>
				</div>
			</div>
			<div className="w-full flex justify-center m-5 p-8 flex">
				<div className="max-w-sm w-auto h-1/5 mx-4 my-4 flex flex-col justify-center overflow-hidden">
					<div className="self-center">
						<img className="object-cover w-32 h-auto object-center rounded-full p-2 justify-center"
						src="philipp.jpg" alt="Philipp" />
					</div>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Philipp Herzberg</div>
						<span className="font-thin text-md mb-2">Business & Marketing</span>
					</div>
					<div className="px-6 pt-4 pb-2 w-full flex">
						<div className="p-2 content-around space-around">
								<a href="https://twitter.com/mikioherzberg"
									rel="noreferrer"
									target="_blank">
									<FontAwesomeIcon icon={["fab", "twitter"]} />
								</a>
						</div>
						<div className="p-2 content-around space-around">
								<a
									href="https://www.linkedin.com/in/philippherzberg/"
									rel="noreferrer"
									target="_blank">
									<FontAwesomeIcon icon={["fab", "linkedin"]} />
								</a>
						</div>
					</div>
				</div>
				<div className="max-w-sm w-auto h-1/5 mx-4 my-4 flex flex-col justify-center overflow-hidden">
					<div className="self-center">
						<img
							className="object-cover w-32 h-auto object-center rounded-full p-2 justify-center"
							src="nate.png"
							alt="Natnael" />
					</div>

					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Natnael Getahun</div>
						<span className="font-thin text-md mb-2">Tech & Product</span>
					</div>
					<div className="px-6 pt-4 pb-2 w-full flex">
						<div className="p-2 content-around space-around">
							<a href="https://twitter.com/babyodainaonsie"
								rel="noreferrer"
								target="_blank">
								<FontAwesomeIcon icon={["fab", "twitter"]} />
							</a>
						</div>
						<div className="p-2 content-around space-around">
							<a href="https://www.linkedin.com/in/ngetahun/"
								rel="noreferrer"
								target="_blank">
								<FontAwesomeIcon icon={["fab", "linkedin"]} />
							</a>
						</div>
						<div className="p-2 content-around space-around">
							<a href="https://github.com/ngetahun"
								rel="noreferrer"
								target="_blank">
								<FontAwesomeIcon icon={["fab", "github"]} />
							</a>
						</div>

					</div>
				</div>
			</div>
		</SiteLayout>
	);
}

export default AboutUs
