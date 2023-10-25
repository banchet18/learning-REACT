import logo from "../images/logo.svg";
import { pageLinks } from "../data";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((links) => {
            return (
              <PageLinks {...links} key={links.id} className={"nav-link"} />
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((links) => {
            return (
              <SocialLinks {...links} key={links.id} className={"nav-icon"} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
