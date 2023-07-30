import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  // hide submenu on mouse-out
  const handleSubmenu = (event) => {
    if (!event.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3>strapi</h3>
        <button className="toggle-btn" onClick={openSidebar} type="button">
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
