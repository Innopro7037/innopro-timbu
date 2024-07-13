import { useState } from 'react'
import './CartPage.css'
import h from './assets/b.png'
import Logistics from './Logistics'
import { Link } from 'react-router-dom'

const CartPage = () => {

    const [quant, setQuant] = useState(1)
    const [quant2, setQuant2] = useState(1)

    const addQuant = () => {
        if (quant > 0) {
            setQuant(quant + 1)
        }
    }

    const reduceQuant = () => {
        if (quant > 1) {
            setQuant(quant - 1)
        }
    }
    const addQuant2 = () => {
        if (quant2 > 0) {
            setQuant2(quant2 + 1)
        }
    }

    const reduceQuant2 = () => {
        if (quant2 > 1) {
            setQuant2(quant2 - 1)
        }
    }

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
                            <div className="reduce" onClick={() => reduceQuant()}><ion-icon name="remove-outline"></ion-icon></div>
                            <div className="quant">{quant}</div>
                            <div className="add" onClick={() => addQuant()}><ion-icon name="add-outline"></ion-icon></div>
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
                            <div className="reduce"  onClick={() => reduceQuant2()}><ion-icon name="remove-outline"></ion-icon></div>
                            <div className="quant">{quant2}</div>
                            <div className="add" onClick={() => addQuant2()}><ion-icon name="add-outline"></ion-icon></div>
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