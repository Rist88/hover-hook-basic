import Head from "next/head";
import { useState, useContext } from "react";
import { Context } from "../lib/Context";
import CartItem from "../components/CartItem";
import Header from "../components/Header";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item: any) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Your cart." />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container-main">
        <main className="cart-page">
          <h1 className="check-out-header">Check out</h1>
          {cartItemElements}
          <p className="total-cost">Total: {totalCostDisplay}</p>
          {cartItems.length > 0 ? (
            <div className="order-button">
              <button onClick={placeOrder}>{buttonText}</button>
            </div>
          ) : (
            <p className="no-items-subtext">You have no items in your cart.</p>
          )}
        </main>
      </div>
    </>
  );
}

export default Cart;
