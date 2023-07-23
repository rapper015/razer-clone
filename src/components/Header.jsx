import {  useState } from "react"
import logo from "../images/logo.png"
export default function Header() {
	const [openSearch,setOpenSearch]=useState(false);
	const [openCart,setOpenCart]=useState(false);
	const [mobile,setMobile]=useState(false);


	mobile ? document.getElementsByTagName('html')[0].style.overflowY = "hidden" : document.getElementsByTagName('html')[0].style.overflowY = "scroll"
  return (
	<div>
		<div className="header">
			<div className="hamburger">
				<i className="fa-solid fa-bars" id={mobile ? "display_none" : ""} onClick={()=>setMobile(!mobile)}></i>
				<i className="fa-solid fa-xmark" id={mobile ? "" : "display_none"} onClick={()=>setMobile(!mobile)}></i>
				</div>
			<div className="dark_backdrop" id={mobile ? "" : "display_none"}></div>
			<img src={logo} alt="" />
			<ul className={mobile ? "desktop_view mobile_view" : "desktop_view"}>
				<li>Store</li>
				<li>PC</li>
				<li>Console</li>
				<li>Mobile</li>
				<li>Lifestyle</li>
				<li>Services</li>
				<li>Community</li>
				<li>Support</li>
				<li id={mobile ? "display_none" : ""}><i className="fa-solid fa-magnifying-glass" onClick={()=>setOpenSearch(!openSearch)}></i></li>
				<div className={openSearch?"home_search" :"home_search visibility"}>
					<i className="fa-solid fa-magnifying-glass"></i>
					<input type="text" placeholder="Search Razer.com" />
					<i className="fa-solid fa-xmark" id="pointer" onClick={()=>setOpenSearch(!openSearch)}></i>
				</div>
			</ul>
			<div className= {openCart ? "backdrop" : "backdrop visibility"} onClick={()=>setOpenCart(!openCart)}></div>
			<div className="cart">
					<i className="fa-solid fa-cart-shopping" onClick={()=>setOpenCart(!openCart)}></i>
					<div className={openCart ?"home_cart_box": "home_cart_box visibility"}>
						<p>Your cart is Empty</p>
						<div className="home_cart_box_links">
							<span></span>
							<p><i className="fa-solid fa-cart-shopping"></i>Cart</p>
							<span></span>
							<p><i className="fa-solid fa-box"></i>Order</p>
							<span></span>
							<p><i className="fa-solid fa-user"></i>Account</p>
							<span></span>
							<p><i className="fa-solid fa-gem"></i>RazerStore Rewards</p>
							<span></span>
							<p><i className="fa-solid fa-arrow-right-to-bracket"></i>Log In</p>
						</div>
					</div>
				</div>
		</div>
	</div>
  )
}
