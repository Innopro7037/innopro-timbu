import './CartPage.css'
import h from './assets/b.png'
import Logistics from './Logistics'
import { Link } from 'react-router-dom'

const CartPage = () => {
  return (
    <>
    <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="cart-img"><img src={h} alt="watch" /></div>
        <div className="calc">
            <div className="space-between">
                <p className="name">Versace</p>
                <p className="name">Quantity</p>
            </div>
            <div className="space-between">
                <p className="small">Aion Chrono 45mm</p>
                <p className="name">1 <span>Change</span></p>
            </div>
            <div className="space"></div>
            <div className="space-between">
                <p className="small">Size</p>
                <p className="name">Price</p>
            </div>
            <div className="space-between">
                <p className="name">One Size</p>
                <p className="price">$1,230</p>
            </div>
            <div className="sum"><h3>Summary</h3></div>
            <div className="space-between">
                <p className="small">Subtotal</p>
                <p className="price">$1,230</p>
            </div>
            <div className="space-between">
                <p className="small">Delivery</p>
                <p className="price">$25</p>
            </div>
            <div className="line"></div>
            <div className="space-between">
                <p className="small">Total</p>
                <p className="price">USD $1,255</p>
            </div>

            <Link to='/checkout'><button>Go To Checkout</button></Link>
        </div>
    </div>
    <Logistics />
    </>
  )
}

export default CartPage