import React from "react";
import "./navbar.css";

import IconButton from "@mui/material/IconButton";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Person2Icon from "@mui/icons-material/Person2";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import UserOptions from "../layout/Header/UserOptions";
import { useState } from "react";
import Search from "../Product/Search";

function Navbar({ isAuth, user }) {
	const [search, setSearch] = useState(true);
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
				<div
					className="navbarc3_c1"
					style={{
						// border: "1px solid yellow",
						flex: "1",
						display: "flex",
						height: "100%",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{search && (
						// <h1 style={{ color: "red" }}>
						// 	{" "}
						<Search />
						// </h1>
					)}
				</div>
				<span
					className="navbarc3_c1"
					style={{
						width: "30%",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<IconButton onClick={() => setSearch(!search)}>
						<SearchRoundedIcon sx={{ color: grey["A100"] }} />
					</IconButton>
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
					{/* <Link to="/search"> */}

					{/* </Link> */}
					<Link to="/cart">
						<IconButton>
							<ShoppingCartTwoToneIcon sx={{ color: grey["A100"] }} />
						</IconButton>
					</Link>
				</span>

				{/* hi */}
			</div>
			<div
				className="navbarc4"
				style={{
					// border: "1px solid red",
					flex: "0.25",
				}}
			>
				{isAuth && <UserOptions user={user} />}
			</div>
		</div>
	);
}

export default Navbar;
