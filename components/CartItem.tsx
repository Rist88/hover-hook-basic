import React, { useState, useContext } from "react";
// import PropTypes from "prop-types";
import { Context } from "../lib/Context";
import useHover from "../hooks/useHover";
import { RiDeleteBinFill, RiDeleteBinLine } from "react-icons/ri";

function CartItem({
  item,
}: {
  item: { id: string; url: string; isFavorite: boolean };
}) {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  const deleteBinIcon = hovered ? (
    <RiDeleteBinLine className="ri-delete-bin-fill" />
  ) : (
    <RiDeleteBinFill className="ri-delete-bin-line" />
  );

  return (
    <div className="cart-item">
      <div onClick={() => removeFromCart(item.id)} ref={ref}>
        {deleteBinIcon}
      </div>

      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

// CartItem.propTypes = {
//   item: PropTypes.shape({
//     url: PropTypes.string.isRequired,
//   }),
// };

export default CartItem;
