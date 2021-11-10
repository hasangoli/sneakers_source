import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [cardItems, setCardItems] = useState(0);

  return (
    <>
      <Header cardItems={cardItems} setCardItems={setCardItems} />
      <Main cardItems={cardItems} setCardItems={setCardItems} />
    </>
  );
};

export default App;
