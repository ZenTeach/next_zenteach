import NavBar from "./NavBar";
import Footer from './Footer';

const SiteLayout = ({ children }) => (
  <div className="bg-white lg:antialiased">
		<div className="max-w-full sm:max-w-full mx-auto">
			<NavBar />
		</div>
    <div>{children}</div>
		<Footer />
  </div>
);

export default SiteLayout;
