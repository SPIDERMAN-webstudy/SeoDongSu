import {useState} from 'react';
import Header from "../src/components/Layout/Header";
import Meal from "../src/components/Meals/Meal";
import Cart from "../src/components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  };
  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }

  return (
    <div>
      {cartIsShown && <Cart />}
      <Header />
      <Meal />
    </div>
  );
}

export default App;
