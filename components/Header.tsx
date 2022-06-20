import { useContext } from "react";
import Link from "next/link";
import { Context } from "../lib/Context";
import { IconContext } from "react-icons";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";

function Header() {
  const { cartItems } = useContext(Context);
  const CartPage =
    cartItems.length > 0 ? (
      <IconContext.Provider value={{ className: "remixIconBig" }}>
        <RiShoppingCartFill />
      </IconContext.Provider>
    ) : (
      <IconContext.Provider value={{ className: "remixIconBig" }}>
        <RiShoppingCartLine />
      </IconContext.Provider>
    );
  return (
    <header>
      <Link href="/">
        <a>
          <h1 className="logo-text">Pic Some</h1>
        </a>
      </Link>
      <Link href="/cart">
        <a>{CartPage}</a>
      </Link>
    </header>
  );
}

export default Header;
