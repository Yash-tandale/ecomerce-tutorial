import React, { useState } from "react";

const AddProduct = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [company, setCompany] = useState("");
	const [error, setError] = useState(false);

	const addProduct = async () => {
		if (!name || !price || !category || !company) {
			setError(true);
			return false;
		}

		const userID = JSON.parse(localStorage.getItem("user"))._id;
		let result = await fetch("http://localhost:5000/add-product", {
			method: "post",
			body: JSON.stringify({ name, price, category, company, userID }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		result = await result.json();
		console.log(result);
	};

	return (
		<div className="signup-form">
			<h1>Add Product</h1>
			<input
				type="text"
				className="inputBox"
				placeholder="Enter product name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			{error && !name && <span>Enter valid name</span>}
			<input
				type="text"
				className="inputBox"
				placeholder="Enter product price"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			{error && !price && <span>Enter valid price</span>}
			<input
				type="text"
				className="inputBox"
				placeholder="Enter product category"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
			/>
			{error && !category && <span>Enter valid category</span>}
			<input
				type="text"
				className="inputBox"
				placeholder="Enter product company"
				value={company}
				onChange={(e) => setCompany(e.target.value)}
			/>
			{error && !company && <span>Enter valid company</span>}
			<button className="signup-button" onClick={addProduct}>
				Add Product
			</button>
		</div>
	);
};

export default AddProduct;
