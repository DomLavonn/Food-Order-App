import classes from './Cart.module.css'
import Modal

    from "../UI/Modal/Modal";
const Cart = (props) => {
    // getting our items list and store in variable
    const cartItem =<ul className={classes['card-items']}>{[
        {id: 'c1', name: 'Shsho', amount: 2, price: 12.99
    }].map((item) => <li>{item.name}</li>)
    }</ul>

    return <Modal>
        cartitems
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.66</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--alt']}> Close </button>
            <button className={classes.button}> Order </button>

        </div>
    </Modal>
}

export default Cart