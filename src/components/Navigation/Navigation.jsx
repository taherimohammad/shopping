import {NavLink} from "react-router-dom";
import './Navigation.css'
import {useCart} from "../../Providers/CartProvider";

const Navigation = () => {
	const {cart} = useCart();
	return (
		<header className='mainNavigation'>
			<nav>
				<ul>
					<li>
						<NavLink to='/' className={(b) => b.isActive ? 'activeLink' : ''}>Home</NavLink>
					</li>
					<li className='cartLink'>
						<NavLink to='/cart' className={(b) => b.isActive ? 'activeLink' : ''}>Cart
						</NavLink>
						{cart.length > 0 && (
							<span>{cart.length}</span>
						)}
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navigation;