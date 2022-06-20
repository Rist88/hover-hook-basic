import { useState, useContext } from "react";
import useHover from "../hooks/useHover";
import { Context } from "../lib/Context";
import { IconContext } from "react-icons";
import {
  RiHeartLine,
  RiHeartFill,
  RiAddCircleLine,
  RiShoppingCartFill,
} from "react-icons/ri";
// remixIconSmall class
function Image({
  className,
  img,
}: {
  className?: string;
  img: {
    id: string;
    url: string;
    isFavorite: boolean;
  };
}) {
  const [hovered, ref] = useHover();
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <IconContext.Provider value={{ className: "remixIconSmall" }}>
          <RiHeartFill
            className="ri-heart-fill favorite"
            onClick={() => toggleFavorite(img.id)}
          />
        </IconContext.Provider>
      );
    } else if (hovered) {
      return (
        <IconContext.Provider value={{ className: "remixIconSmall" }}>
          <RiHeartLine
            className="ri-heart-line favorite"
            onClick={() => toggleFavorite(img.id)}
          />
        </IconContext.Provider>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item: any) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <IconContext.Provider value={{ className: "remixIconSmall" }}>
          <RiShoppingCartFill
            className="ri-shopping-cart-fill cart"
            onClick={() => removeFromCart(img.id)}
          />
        </IconContext.Provider>
      );
    } else if (hovered) {
      return (
        <IconContext.Provider value={{ className: "remixIconSmall" }}>
          <RiAddCircleLine
            className="ri-add-circle-line cart"
            onClick={() => addToCart(img)}
          />
        </IconContext.Provider>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

export default Image;
