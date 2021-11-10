import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import rootContext from "./context";

const App = () => {
  const item = {
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    body: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: "125.00",
    off: "50",
    realPrice: "250.00",
    images: [
      "./images/image-product-1.jpg",
      "./images/image-product-2.jpg",
      "./images/image-product-3.jpg",
      "./images/image-product-4.jpg",
    ],
    thumbnails: [
      "./images/image-product-1-thumbnail.jpg",
      "./images/image-product-2-thumbnail.jpg",
      "./images/image-product-3-thumbnail.jpg",
      "./images/image-product-4-thumbnail.jpg",
    ],
  };

  const [itemValue, setItemValue] = useState(0);
  const [allItems, setAllItems] = useState(0);

  return (
    <rootContext.Provider
      value={{
        allItems,
        setAllItems,
        item,
        itemValue,
        setItemValue,
      }}
    >
      <Header />
      <Main />
    </rootContext.Provider>
  );
};

export default App;
