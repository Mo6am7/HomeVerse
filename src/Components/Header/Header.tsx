import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const getMenuStyles = (
    menuOpened: boolean
  ): React.CSSProperties | undefined => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpened ? "-100%" : "0",
      };
    }
  };

  return (
    <section className="h-wapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src="/logo.png" alt="logo" width={100} />

        {/* القائمة */}
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a href="#">Residencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact Us</a>
          <a href="#">Get Started</a>
          <button className="Contact">
            <a href="#">Contact</a>
          </button>
        </div>

        {/* الأيقونة */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
