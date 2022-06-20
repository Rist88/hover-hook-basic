import { useState, useContext } from "react";
// import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
import { Context } from "../lib/Context";
import {
  RiHeartLine,
  RiHeartFill,
  RiAddCircleLine,
  RiShoppingCartFill,
} from "react-icons/ri";

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
        <RiHeartFill
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
    } else if (hovered) {
      return (
        <RiHeartLine
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item: any) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <RiShoppingCartFill
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        />
      );
    } else if (hovered) {
      return (
        <RiAddCircleLine
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        />
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

// Image.propTypes = {
//   className: PropTypes.string,
//   img: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//     isFavorite: PropTypes.bool,
//   }),
// };

export default Image;
