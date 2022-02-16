import './App.css';
import {useState}  from 'react'
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false)

    // Handlers for the modal
    const showCartHandlar = () => {
        setCartIsShown(true)
    }

    const hideCartHandlar = ()  => {
        setCartIsShown(false)
    }
  return (
    <>
        {cartIsShown && <Cart onClose={hideCartHandlar}/>  }
       <Header  onShowCart={showCartHandlar}    />
        <main>
            <Meals/>
        </main>
    </>
  );
}

export default App;
