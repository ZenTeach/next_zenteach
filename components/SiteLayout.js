import NavBar from "./NavBar";
import Footer from './Footer';

const SiteLayout = ({ children }) => (
  <div className="bg-white antialiased">
    <div>
      <div>
        <div className="max-w-xl mx-auto">
          <nav>
            <div className="py-4 flex items-center">
              <NavBar />
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div>{children}</div>
		<Footer />
  </div>
);

export default SiteLayout;
