import Layout from "../Layout/Layout";
import {useCart, useCartActions} from "../Providers/CartProvider";
import './cartPages.css'
import {NavLink} from "react-router-dom";

const CartPage = () => {
	const {cart, total} = useCart();
	const dispatch = useCartActions()
	const incHandler = (p) => {
		dispatch({type: 'ADD_TO_CART', payload: p});
	}
	const decHandler = (p) => {
		dispatch({type: 'REMOVE_PRODUCT', payload: p});
	}
	if (!cart.length) return (
		<Layout>
			<h2>Your cart is empty. please order !</h2>
		</Layout>
	);

	return (
		<Layout>
			<main className='container'>
				<section className='cartCenter'>
					<section className='cartItemList'>
						{cart.map((item) => {
							return (
								<div key={item.id} className='cartItem'>
									<div className='itemImg'>
										<img src={item.image} alt={item.name}/>
									</div>
									<div>{item.name}</div>
									<div>{item.price * item.quantity}</div>
									<div className='btnGroup'>
										<button onClick={() => decHandler(item)}>-</button>
										<button>{item.quantity}</button>
										<button onClick={() => incHandler(item)}>+</button>
									</div>
								</div>
							)
						})
						}
					</section>
					<CartSummery total={total} cart={cart}/>
				</section>
			</main>
		</Layout>
	)
}

export default CartPage;

const CartSummery = ({total, cart}) => {
	const mainTotal = cart.length ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0) : 0;
	return (<section className='cartSummery'>
			<h2>Cart Summery</h2>
			<div>
				<div className='summeryItem'>
					<p>Cart Total :</p>
					<p>{mainTotal} $</p>
				</div>
				<div className='summeryItem'>
					<p>Cart Discount :</p>
					<p>{mainTotal - total} $</p>
				</div>
				<div className='summeryItem'>
					<p>Pay Price :</p>
					<p>{total} $</p>
				</div>
			</div>
		<NavLink to='/checkout'>
			<button className='btn primary'>Go to checkout</button>
		</NavLink>
		</section>
	);
}