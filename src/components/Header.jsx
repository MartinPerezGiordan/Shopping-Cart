import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>ECOMMERCE</h1>
      </div>
      <Link to="cart">
        Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    </header>
  );
};

export default Header;
