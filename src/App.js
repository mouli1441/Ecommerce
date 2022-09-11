import React, {useState , useEffect} from 'react'
import Product from './components/Products/Product/Product';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import { commerce } from './lib/commerce';
import Cart from './components/Cart/Cart';
import { Routes , Route } from 'react-router-dom';
import Checkout from './components/CheckoutForm/Checkout/Checkout';


 const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    // const {items} = await commerce.products.list();
    commerce.cart.retrieve().then((cart) => setCart(cart));
 }

  // console.log(cart);

  const handleAddToCart = async (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((response) => setCart(response));
   
    // console.log(cart);
   
  }

  const handleUpdateCartQty = async (productId , quantity) => {
  // const{cart} = await commerce.cart.update(productId ,{quantity}); 
  commerce.cart.update(productId, { quantity: quantity }).then(response => setCart(response));
  
  
  }

  const handleRemoveFromCart = async (productId) => {
    // const {cart} = await commerce.cart.remove(productId);
    commerce.cart.remove(productId).then(response => setCart(response));
    
  }

  const handleEmptyCart = async() => {
    // const {cart} = await commerce.cart.empty();
    commerce.cart.empty().then((response) => setCart(response));
    
  }

    useEffect(() => {
    fetchProducts();
    fetchCart(); 
 
  }, []);


  console.log(cart);


  return (
    
   <div>
     <Navbar totalItems = {cart?.total_items} />
    <Routes>
        <Route path="/" element={<Products products = {products} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart = {cart}
        handleUpdateCartQty = {handleUpdateCartQty}
        handleRemoveFromCart = {handleRemoveFromCart}
        handleEmptyCart = {handleEmptyCart}
        />}/>
        <Route path ="/checkout" element={<Checkout checkout = {Checkout} cart={cart} />} />
        </Routes>
   </div>
   
  )
}

export default App;
