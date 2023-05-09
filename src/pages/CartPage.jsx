import Layout from "../Layout/Layout";
import {useCart, useCartActions} from "../Providers/CartProvider";
import './cartPages.css'

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
									<div>
										<button onClick={() => decHandler(item)}>Remove</button>
										<button>{item.quantity}</button>
										<button onClick={() => incHandler(item)}>Add</button>
									</div>
								</div>
							)
						})
						}
					</section>
					<section className='cartSummery'>
						<h2>Cart Summery :</h2>
						<p>{total}</p>
					</section>
				</section>
			</main>
		</Layout>
	)
}

export default CartPage;