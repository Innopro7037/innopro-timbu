import './Checkout.css'
import Logistics from './Logistics'
import visa from './assets/visa.png'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <>
    <div className='checkout'>
        <h1>Checkout</h1>
        <div className="pay">
            <div className="email">
                <p>Email</p>
                <input type="text" placeholder='innopro7037@gmail.com'/>
            </div>
            <div className="cardy">
                <p>Card Details</p>
                <div className="input-box">
                <input type="text" placeholder='22775599443322001'/>
                <img src={visa} alt="visa" />
                </div>
            </div>
            <div className="cvv">
                <div className="exp">
                <p>Expiration</p>
                <input type="text" placeholder='mm/yy'/>
                </div>
                <div className="c">
                <p>CVV</p>
                <input type="text" placeholder='000'/>
                </div>
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
            <div className="liner"></div>
            <div className="space-between">
                <p className="small">Total</p>
                <p className="price">USD $1,255</p>
            </div>

            <Link to='/'><button>Go To Checkout</button></Link>
            <h4><ion-icon name="lock-closed-outline"></ion-icon> Payments are secured and encrypted</h4>
        </div>
    </div>
    <Logistics />
    </>
  )
}



export default Checkout