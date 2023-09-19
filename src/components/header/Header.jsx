import Dropdown from "./dropdown/Dropdown.jsx";
import ThemePicker from "./themepicker/ThemePicker.jsx";
import "./Header.scss";
import Logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <nav>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav__rightContent">
        <Dropdown />
        <ThemePicker />
      </div>
    </nav>
  );
};

export default Header;
