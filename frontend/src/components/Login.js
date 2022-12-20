import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const auth = localStorage.getItem("user");
		if (auth) {
			navigate("/");
		}
	});

	const dataHandler = async (req, res) => {
		console.log([email, password]);
		let result = await fetch("http://localhost:5000/login", {
			method: "post",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		result = await result.json();
		console.log(result);
		if (result.email) {
			localStorage.setItem("user", JSON.stringify(result));
			navigate("/");
		} else {
			alert("Please enter correct details");
		}
	};

	return (
		<div className="login-form">
			<h1>Login</h1>
			<input
				className="inputBox"
				type={"text"}
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				placeholder="Enter email"
			/>
			<input
				className="inputBox"
				type={"password"}
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				placeholder="Enter password"
			/>
			<button className="signup-button" type="button" onClick={dataHandler}>
				Login
			</button>
		</div>
	);
};

export default Login;
