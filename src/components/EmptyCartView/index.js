import {Link} from 'react-router-dom'

import './index.css'

const imgUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img src={imgUrl} className="cart-empty-img" alt="cart empty" />
    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

    <Link to="/">
      <button type="button" className="shop-now-btn">
        Shop Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
