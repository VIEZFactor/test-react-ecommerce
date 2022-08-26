import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const onAdd = (product) =>{   
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );

      setCartItems(newCartItems);
    }else{
      const newCartItems = [...cartItems, {...product, qty: 1}];
      setCartItems(newCartItems);
    }
  }
  const onRemove = (product) =>{  
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    }else{
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
    }
  }
  return (
    <div id="app">
      <div id="menuContainer" className='fixed-top menu-bg py-2'>
        <div className='container'>
          <Header countCartItems={cartItems.length} />
        </div>
      </div>
      <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/>
      <div className='container'>
        <div className="row">
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </div>
      </div>      
      <Footer />
    </div>
  );
}

export default App;
