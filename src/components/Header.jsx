import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ cartItemCount }) => {
  return (
    <header>
      <Link className="logo" to="/">
        <h1>ECOMMERCE</h1>
      </Link>
      <Link to="/cart">
        Cart {cartItemCount}
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    </header>
  );
};

export default Header;
