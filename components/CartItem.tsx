import React, { useState, useContext } from "react";
import { Context } from "../lib/Context";
import useHover from "../hooks/useHover";
import { IconContext } from "react-icons";
import { RiDeleteBinFill, RiDeleteBinLine } from "react-icons/ri";

function CartItem({
  item,
}: {
  item: { id: string; url: string; isFavorite: boolean };
}) {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  const deleteBinIcon = hovered ? (
    <IconContext.Provider value={{ className: "remixIconSmall" }}>
      <RiDeleteBinLine className="ri-delete-bin-fill" />
    </IconContext.Provider>
  ) : (
    <IconContext.Provider value={{ className: "remixIconSmall" }}>
      <RiDeleteBinFill className="ri-delete-bin-line" />
    </IconContext.Provider>
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

export default CartItem;
