import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = ({ history }) => {
	const [keyword, setKeyword] = useState("");

	const searchSubmitHandler = (e) => {
		e.preventDefault();
		console.log(keyword);
		if (keyword.trim()) {
			history.push(`/products/${keyword}`);
		} else {
			history.push("/products");
		}
	};

	return (
		// <Fragment>
		// <MetaData title="Search A Product -- ECOMMERCE" />
		<form className="searchBox" onSubmit={searchSubmitHandler}>
			<input
				type="text"
				placeholder="Search by ProductId"
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<input type="submit" value="" />
		</form>
		// </Fragment>
	);
};

export default Search;
