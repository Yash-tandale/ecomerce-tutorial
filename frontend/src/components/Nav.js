import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
	const navigate = useNavigate();
	const auth = localStorage.getItem("user");
	const logOut = () => {
		localStorage.clear();
		navigate("/");
	};

	return (
		<div>
			<img
				alt="logo"
				className="logo"
				src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-shop-with-the-gentlemen-collection-and-win-the-shopee-0.png"
			/>
			{auth ? (
				<ul className="nav-ul">
					<li>
						<Link to="/">Products</Link>
					</li>
					<li>
						<Link to="/add">Add Product</Link>
					</li>
					<li>
						<Link to="/update">Update Product</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/signup" onClick={logOut}>
							Logout
						</Link>
					</li>
				</ul>
			) : (
				<ul className="nav-ul nav-right">
					<li>
						<Link to="/signup">Sign Up</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Nav;
