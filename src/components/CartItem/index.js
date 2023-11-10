import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      // const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onClickDecrement = () => {
        decrementCartItemQuantity(cartItemDetails.dish_id)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(cartItemDetails.dish_id)
      }
      const onRemoveCartItem = () => {
        removeCartItem(cartItemDetails.dish_id)
      }
      const totalPrice = cartItemDetails.dish_price * cartItemDetails.quantity

      return (
        <li className="cart-dish-item-container">
          <img
            src={cartItemDetails.dish_image}
            alt={cartItemDetails.dish_name}
            className="cart-dish-img"
          />
          <div className="cart-dish-details">
            <h1 className="cart-dish-heading"> {cartItemDetails.dish_name} </h1>
            <p className="cart-dish-currency">
              {' '}
              {cartItemDetails.dish_currency} {totalPrice}{' '}
            </p>
            <div className="quantity-container">
              <button
                className="cart-minus-btn"
                onClick={onClickDecrement}
                type="button"
              >
                {' '}
                -{' '}
              </button>
              <p className="quantity"> {cartItemDetails.quantity} </p>
              <button
                className="cart-plus-btn"
                onClick={onClickIncrement}
                type="button"
              >
                {' '}
                +{' '}
              </button>
            </div>
          </div>
          <button
            className="cart-remove-btn"
            onClick={onRemoveCartItem}
            type="button"
          >
            {' '}
            Remove{' '}
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
