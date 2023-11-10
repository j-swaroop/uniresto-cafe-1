import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../../context/CartContext'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  const renderItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value

        return <span className="cart-count"> {cartList.length} </span>
      }}
    </CartContext.Consumer>
  )

  return (
    <div className="header-container">
      <div className="header-responsive-container">
        <Link to="/" className="nav-link">
          <h1 className="restaurent-heading"> UNI Resto Cafe </h1>
        </Link>
        <div className="cart-container">
          <p className="cart-heading"> My Orders</p>
          <Link to="/cart" className="nav-link-cart">
            <AiOutlineShoppingCart size={25} />
            {renderItemsCount()}
          </Link>
          <button type="button" className="logout-btn" onClick={onClickLogout}>
            {' '}
            Logout{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
