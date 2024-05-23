import React, {useState} from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
     {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el}/>
      ))}
      <p className='summa'>Total:{new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
          <h2>Nothin in cart</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen,setCarOpen] = useState(false)
  return (
    <header>
        <div>
            <img src='./img-sn/logo1.png' alt='pic' className='logo-png'/>
            <span className='logo'>Sneaker-Shop</span>
            <ul className='nav'>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Profile</li>
            </ul>
            <FaShoppingBasket onClick ={() => setCarOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen ? 'active':''}`}/>
            {cartOpen && (
                <div className='shop-cart'>
                 {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
                </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
