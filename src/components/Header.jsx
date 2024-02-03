import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faIcons } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ cartList }) => {
  let cartItemCount = cartList.filter((item) => !item.isRemoved).length;

  return (
    <header>
      <Link className="logo link" to="/">
        <FontAwesomeIcon icon={faIcons} />
        <h1>UrbanGoods</h1>
      </Link>
      <Link className="link cart-icon" to="/cart">
        Cart {cartItemCount}
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    </header>
  );
};

export default Header;
