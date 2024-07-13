import './CartPage.css'
import h from './assets/b.png'
import Logistics from './Logistics'
import { Link } from 'react-router-dom'

const CartPage = () => {
  return (
    <>
    <div className="cart-page">
        <div className="clear">
            <button>Clear Cart</button>
        </div>
        <div className="cart-item">
            <h2>Cart (1)</h2>
            <div className="line"></div>
            <div className="item-main">
                <div className="cart-img">
                    <img src={h} alt="item" />
                </div>
                <div className="info">
                    <div className="space-between">
                        <div className="desc">
                            <h4>Versace</h4>
                            <p>Aion Chrono 45mm</p>
                        </div>
                        <div className="pc">
                            <h3>$1,255</h3>
                        </div>
                    </div>
                    <div className="size">
                        <p>Size</p>
                        <p>One Size</p>
                    </div>
                    <div className="space-between">
                        <div className="remove"><ion-icon name="trash-outline"></ion-icon> REMOVE</div>
                        <div className="quantity">
                            <div className="reduce"><ion-icon name="remove-outline"></ion-icon></div>
                            <div className="quant">1</div>
                            <div className="add"><ion-icon name="add-outline"></ion-icon></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cart-item">
            <h2>Cart (1)</h2>
            <div className="line"></div>
            <div className="item-main">
                <div className="cart-img">
                    <img src={h} alt="item" />
                </div>
                <div className="info">
                    <div className="space-between">
                        <div className="desc">
                            <h4>Versace</h4>
                            <p>Aion Chrono 45mm</p>
                        </div>
                        <div className="pc">
                            <h3>$1,255</h3>
                        </div>
                    </div>
                    <div className="size">
                        <p>Size</p>
                        <p>One Size</p>
                    </div>
                    <div className="space-between">
                        <div className="remove"><ion-icon name="trash-outline"></ion-icon> REMOVE</div>
                        <div className="quantity">
                            <div className="reduce"><ion-icon name="remove-outline"></ion-icon></div>
                            <div className="quant">1</div>
                            <div className="add"><ion-icon name="add-outline"></ion-icon></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className="space-between">
                <p>Items total (2)</p>
                <div className="price">
                    <h4>$2,510</h4>
                </div>
            </div>
            <Link to='/checkout'>
                <button>Go To Checkout ($2,510)</button>
            </Link>
        </div>
    </div>
    <Logistics />
    </>
  )
}

export default CartPage