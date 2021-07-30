import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-cards">
      <Link to="/">
        <img className="header-cards_logo" src={logo} alt="profile-cards" />
      </Link>
    </header>
  );
}

export default Header;
