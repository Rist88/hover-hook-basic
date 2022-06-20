import { useContext } from "react";
import Link from "next/link";
import { Context } from "../lib/Context";
import { IconContext } from "react-icons";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";

function Header() {
  const { cartItems } = useContext(Context);
  const cartIconStyles = {
    size: "2em",
  };
  const CartPage =
    cartItems.length > 0 ? (
      <IconContext.Provider value={cartIconStyles}>
        <RiShoppingCartFill />
      </IconContext.Provider>
    ) : (
      <IconContext.Provider value={cartIconStyles}>
        <RiShoppingCartLine />
      </IconContext.Provider>
    );
  return (
    <header>
      <Link href="/">
        <a>
          <h2>Pic Some</h2>
        </a>
      </Link>
      <Link href="/cart">
        <a>{CartPage}</a>
      </Link>
    </header>
  );
}

export default Header;
