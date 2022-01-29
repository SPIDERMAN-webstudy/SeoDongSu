import {useState} from 'react';
import Header from "../src/components/Layout/Header";
import Meal from "../src/components/Meals/Meal";
import Cart from "../src/components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  };
  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meal />
    </CartProvider>
  );
}

export default App;
