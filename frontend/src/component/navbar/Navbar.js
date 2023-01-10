import React from "react";
import "./navbar.css";

import IconButton from "@mui/material/IconButton";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Person2Icon from "@mui/icons-material/Person2";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
function Navbar() {
	return (
		<div className="navbar">
			<div className="navbarc1">
				{/* <a href="/">Home</a> */}
				<Link
					to="/"
					underline="none"
					style={{
						color: "white",
						textDecoration: "none",
					}}
				>
					Home
				</Link>
				<Link
					to="/products"
					style={{
						color: "white",
						textDecoration: "none",
					}}
				>
					Shop
				</Link>
				<Link
					to="/contact"
					style={{
						textDecoration: "none",
						color: "white",
					}}
				>
					Contact
				</Link>
				<Link
					to="/about"
					style={{
						textDecoration: "none",
						color: "white",
					}}
				>
					About
				</Link>
				{/* <a href="/products">Shop</a>
				<a href="/contact">Contact</a>
				<a href="/about">About</a> */}
			</div>
			<div className="navbarc3">
				<Link to="/login">
					<IconButton>
						<LockOpenTwoToneIcon sx={{ color: grey["A100"] }} />
					</IconButton>
				</Link>
				<Link to="/account">
					<IconButton>
						<Person2Icon sx={{ color: grey["A100"] }} />
					</IconButton>
				</Link>
				<Link to="/search">
					<IconButton>
						<SearchRoundedIcon sx={{ color: grey["A100"] }} />
					</IconButton>
				</Link>
				<Link to="/cart">
					<IconButton>
						<ShoppingCartTwoToneIcon sx={{ color: grey["A100"] }} />
					</IconButton>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
