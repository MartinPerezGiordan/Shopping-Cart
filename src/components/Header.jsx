import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">ECOMMERCE</div>
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    </header>
  );
};

export default Header;
