import { useState, useEffect, createContext } from "react";

interface IThemeContext {
  allPhotos?: {
    id: string;
    url: string;
    isFavorite: boolean;
  }[];
  toggleFavorite?: (id: string) => void;
  cartItems?: {}[];
  addToCart?: (newItem: {}) => void;
  removeFromCart?: (id: string) => void;
  emptyCart?: () => void;
}

const defaultContext: IThemeContext = {
  allPhotos: [],
  cartItems: [],
};

const Context = createContext<IThemeContext>(defaultContext);

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id: string) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromCart(id: string) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
