import logo from '/timbu.svg'
import './Header.css'
import { useState } from 'react'

const Header = () => {

  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
    <header>
      <div className="header-up">
        <div className="menu" onClick={handleClick}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="logo">
          <img src={logo} alt="Timbu Logo" />
          <p>TIMBU STORE</p>
        </div>
        <div className="cart">
          <ion-icon name="cart-outline"></ion-icon>
          <div className="count">10</div>
        </div>
      </div>
    </header>
    <div className="header-down">
        <div className="category">
          <a href="#best">Best Sales</a>
          <a href="#recommended">Recommendation</a>
        </div>
        <div className="search">
          <input type="text" placeholder='Search by Brand or Model' />
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
    <div className={!open ? 'ham' : 'notham'}>
      <div className="close" onClick={handleClick}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <div className="ham-links">
        <a href="#best">Best Sales</a>
        <a href="#recommended">Recommendation</a>
      </div>
    </div>
    </>
  )
}



export default Header