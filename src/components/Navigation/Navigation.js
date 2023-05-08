import {NavLink} from "react-router-dom";
import './Navigation.css'
const Navigation=()=>{
return(
	<header className='mainNavigation'>
		<nav>
			<ul>
				<li>
					<NavLink to='/' className={(b) =>b.isActive?'activeLink':''}>Home</NavLink>
				</li>
				<li>
					<NavLink to='/cart' className={(b) =>b.isActive?'activeLink':''}>Cart</NavLink>
				</li>
			</ul>
		</nav>
	</header>
)
}

export default Navigation;