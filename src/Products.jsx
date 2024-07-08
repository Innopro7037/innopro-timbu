import './Products.css'
import a from './assets/a.png'
import b from './assets/b.png'
import c from './assets/c.png'
import d from './assets/d.png'
import e from './assets/e.png'
import f from './assets/f.png'
import g from './assets/g.png'
import h from './assets/h.png'
import i from './assets/i.png'
import j from './assets/j.png'
import k from './assets/k.png'
import l from './assets/l.png'
import m from './assets/m.png'
import n from './assets/n.png'

const Products = () => {
  return (
    <div className='products'>
        <div className="sect">
            <h2>Best Sales</h2>
            <p>View All</p>
        </div>
        <div className="brand">
            <p>Versace</p>
            <p>Philipp Plein</p>
            <p>Rolex</p>
            <p>DJ Milian</p>
            <p>Hublot</p>
            <p>Dolce & Gabanna</p>
            <p>Patek Philippe</p>
            <p>Richard Mille</p>
        </div>
        <div className="cards">
            <div className="card">
                <div className="card-img"><img src={a} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Philipp Plein</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={b} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Versace</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={c} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Patek Phillipe</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={d} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Richard Mille</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={e} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Hublot</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={f} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Dolce & Gabbana</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={g} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">DJ Milan</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={h} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Rolex</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
        <div className="sect">
            <h2>Recommendation</h2>
            <p>View All</p>
        </div>
        <div className="cards">
            <div className="card">
                <div className="card-img"><img src={i} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Jacob & CO</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={j} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Philipp Stein</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={k} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Gucci</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={l} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Mancheront</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={m} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Rolex</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
            <div className="card">
                <div className="card-img"><img src={n} alt="watch" /></div>
                <div className="card-txt">
                    <p className="name">Dolce & Gabbana</p>
                    <p className="description">1879 Vintage Rose inspired by godfather, 40mm</p>
                    <p className="price">$1,799</p>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Products