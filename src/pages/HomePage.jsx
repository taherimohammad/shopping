import Layout from "../Layout/Layout";
import * as data from '../data'
import {useCart, useCartActions} from "../Providers/CartProvider";
import {checkInCart} from "../util/checkInCart";
import {toast} from "react-toastify";

const HomePage = () => {
	const dispatch = useCartActions();
	const {cart} = useCart();
	const addProductHandler = (p) => {
		toast.success(`${p.name} added to cart !`)
		dispatch({type: 'ADD_TO_CART', payload: p});
	}

	return (
		<Layout>
			<main className='container'>
				<section className='productList'>{data.products.map((p) => {
						return (
							<section className='product' key={p.id}>
								<div className='productImg'>
									<img src={p.image} alt={p.name}/>
								</div>
								<div className='productDes'>
									<h4><b>{p.name}</b></h4>
									<h5>$ {p.price}</h5>
									{checkInCart(cart,p) ? (
										<button className='btn primary'> In Cart
										</button>) : (
										<button onClick={() => addProductHandler(p)} className='btn primary'> Add to Cart
										</button>)}
								</div>
							</section>
						)
					}
				)}</section>
			</main>
		</Layout>
	)
}

export default HomePage;