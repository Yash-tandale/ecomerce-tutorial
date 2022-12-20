import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const auth = localStorage.getItem("user");
		if (auth) {
			navigate("/");
		}
	});

	const collectData = async () => {
		console.log(name, email, password);
		let data = await fetch("http://localhost:5000/signup", {
			method: "post",
			body: JSON.stringify({ name, email, password }),
			headers: {
				"Content-type": "application/json",
			},
		});
		data = await data.json();
		console.log(data);
		localStorage.setItem("user", JSON.stringify(data));
		navigate("/");
	};

	return (
		<div className="signup-form">
			<h1>Sign up</h1>
			<input
				className="inputBox"
				type={"text"}
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter name"
			/>
			<input
				className="inputBox"
				type={"text"}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter email"
			/>
			<input
				className="inputBox"
				type={"password"}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Enter password"
			/>
			<button className="signup-button" type="button" onClick={collectData}>
				Signup
			</button>
		</div>
	);
}

export default Signup;
