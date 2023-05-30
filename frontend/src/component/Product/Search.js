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
		<form className="searchBox" onSubmit={searchSubmitHandler}>
			<MetaData title="Search Product -- Etrendz" />
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
