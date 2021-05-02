import SiteLayout from '../components/SiteLayout'
import Link from "next/link";

const Vision = () => {
	return (
		<SiteLayout>
			<div className="h-full bg-grey mx-auto sm:mt-0 sm:py-12 max-w-4xl">
				<div className="flex">
					<div className="w-2/5">
						<h1 className="text-5xl">Our Vision</h1>
						<div className="my-4 border w-1/5 h-0.5 red-400 border-red-400 border-2 "></div>
						<p className="text-xl font-thin italic">Assist teachers</p>
						<p>
							Our vision is to assist teachers with their daily work.
							A well supported teacher is one that has a greater positive
							impact on their students.
						</p>
					</div>
					<div className="w-3/5">
						<img
							className="object-cover h-auto w-auto object-center rounded-lg "
							src="student_performance.png"
							alt="Student Performance graphic"/>
					</div>
				</div>
				<div className="my-4 border w-3/4 h-0.5 black border-black border-2 mx-8"></div>
				<div className="flex mt-4 pt-4">
					<div className="w-3/5 mx-2">
						<h3 className="text-2xl font-bold">Reduce Teacher Workload</h3>
						<div className="my-4 border w-1/5 h-0.5 red-400 border-red-400 border-2 "></div>
						<p className="mt-4 text-md font-thin italic">
							We strive to keep great teachers in the profession by reducing
							unnecessary workload through the use of technology.
						</p>
						<p className="my-2">
							A
							<Link href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/855933/teacher_workload_survey_2019_main_report_amended.pdf">
								<span className="text-red-400"> 2019 study by the Department for Education </span>
							</Link> found that 87% of
							secondary school teachers view workload to be a fairly serious
							or very serious problem (n=7000).
						</p>
						<p className="my-2">
							A
							<Link href="https://publications.parliament.uk/pa/cm201617/cmselect/cmeduc/199/199.pdf">
								<span className="text-red-400"> 2017 study by the House of Commons </span>
							</Link> found that 75% of teachers
							cited high workload as the main reason for considering leaving the profession.
						</p>
						<p className="my-2">
							A good education is built on the shoulders of great teachers. In fact,
							teachers are the single largest contributor to improved student outcomes (
								<Link href="http://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/">
									<span className="text-red-400">Hattie, 2017</span>
								</Link>),
							which is why ZenTeach strives to help teachers stay in the profession.
						</p>
					</div>
					<div className="w-2/5 mx-2">
						<h3 className="text-2xl font-bold">Workflow Integration</h3>
						<div className="my-4 border w-1/5 h-0.5 red-400 border-red-400 border-2 "></div>
						<p className="mt-4 text-md font-thin italic">
							New functionality is only helpful if it doesn’t cause more workload.
						</p>
						<p className="my-2">
							Helping teachers reduce their workload already helps a great deal
							with improving student outcomes. A well-rested and happy teacher
							will be more excited about their subject, prepare better lessons
							and most importantly, stay in the profession.
						</p>
						<p className="my-2">
							Additionally, we are very careful not to build something that will
							cause more workload. The key phrase is “workflow integration”. Many
							tech tools for teachers introduce powerful features, but they usually
							also entail more work to engage with. At ZenTeach, we work hard to cater
							to existing workflows.
						</p>
					</div>
				</div>
			</div>
		</SiteLayout>
	);
}

export default Vision
