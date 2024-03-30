import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = () => {
    setIsCartVisible(true);
  };

  const hideCartHandler = () => {
    setIsCartVisible(false);
  };
  return (
    <>
      {isCartVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
