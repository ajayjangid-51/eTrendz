import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

const categories = [
	"Laptop",
	"Footwear",
	"trousers",
	"tops",
	"clothing",
	"Camera",
	"SmartPhones",
	"smartwatch",
	"tshirt",
	"electronics",
	"books",
];

const Products = ({ match }) => {
	const dispatch = useDispatch();

	const alert = useAlert();

	const [currentPage, setCurrentPage] = useState(1);
	const [price, setPrice] = useState([0, 25000]);
	const [category, setCategory] = useState("");

	const [ratings, setRatings] = useState(0);

	const {
		products,
		loading,
		error,
		productsCount,
		resultPerPage,
		filteredProductsCount,
	} = useSelector((state) => state.products);

	const keyword = match.params.keyword;

	const setCurrentPageNo = (e) => {
		setCurrentPage(e);
	};

	const priceHandler = (event, newPrice) => {
		setPrice(newPrice);
	};
	let count = filteredProductsCount;

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		dispatch(
			getProduct(keyword, currentPage, price, category, ratings, "false")
		);
	}, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<MetaData title="Products -- Etrendz" />
					<div
						className="productss"
						style={{
							display: "flex",
							height: "86vh",
							justifyContent: "space-between",
							width: "100%",
							padding: "0vh 2vh",
						}}
					>
						<div
							className="productsc1"
							style={{
								display: "flex",
								flexDirection: "column",
								borderRight: "2px solid grey",
								height: "100%",
								flex: "0.25",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<div className="filterBox">
								<div className="filterBox1">
									<Typography
										style={{
											fontWeight: "bold",
											fontSize: "3vh",
										}}
									>
										Price
									</Typography>
									<Slider
										value={price}
										onChange={priceHandler}
										valueLabelDisplay="auto"
										aria-labelledby="range-slider"
										min={0}
										max={25000}
									/>
								</div>
								<div className="filterBox2">
									<Typography
										style={{
											fontWeight: "bold",
											fontSize: "3vh",
										}}
									>
										Categories
									</Typography>
									<ul className="categoryBox">
										{categories.map((category) => (
											<li
												className="category-link"
												key={category}
												onClick={() => setCategory(category)}
												style={{
													fontSize: "2vh",
													fontWeight: "600",
													color: "var(--rd)",
												}}
												// onMouseOver="this.style.color ='#F8F8F8'"
											>
												- {category}
											</li>
										))}
									</ul>
								</div>

								<div className="filterBox1">
									<Typography
										style={{
											fontWeight: "bold",
											fontSize: "3vh",
										}}
									>
										Ratings
									</Typography>
									<Slider
										value={ratings}
										onChange={(e, newRating) => {
											setRatings(newRating);
										}}
										aria-labelledby="continuous-slider"
										valueLabelDisplay="auto"
										min={0}
										max={5}
									/>
								</div>
								{/* <div className="filterBox3">
									<fieldset>
										<Typography
											component="legend"
											style={{
												fontWeight: "bold",
												fontSize: "3vh",
											}}
										>
											Ratings
										</Typography>
										<Slider
											value={ratings}
											onChange={(e, newRating) => {
												setRatings(newRating);
											}}
											aria-labelledby="continuous-slider"
											valueLabelDisplay="auto"
											min={0}
											max={5}
										/>
									</fieldset>
								</div> */}
							</div>
						</div>
						<div
							className="productsc2"
							style={{
								flex: "1 1 0%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								marginLeft: "1vw",
							}}
						>
							<div className="productsHeading">Products</div>

							<div className="products">
								{products &&
									products.map((product) => (
										<ProductCard key={product._id} product={product} />
									))}
							</div>
						</div>
					</div>

					{/* <div className="productsHeading">Products</div>

					<div className="products">
						{products &&
							products.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
					</div> */}
					{/* <div className="filterBox">
						<Typography>Price</Typography>
						<Slider
							value={price}
							onChange={priceHandler}
							valueLabelDisplay="auto"
							aria-labelledby="range-slider"
							min={0}
							max={25000}
						/>

						<Typography>Categories</Typography>
						<ul className="categoryBox">
							{categories.map((category) => (
								<li
									className="category-link"
									key={category}
									onClick={() => setCategory(category)}
								>
									{category}
								</li>
							))}
						</ul>

						<fieldset>
							<Typography component="legend">Ratings Above</Typography>
							<Slider
								value={ratings}
								onChange={(e, newRating) => {
									setRatings(newRating);
								}}
								aria-labelledby="continuous-slider"
								valueLabelDisplay="auto"
								min={0}
								max={5}
							/>
						</fieldset>
					</div> */}

					{null && (
						<div className="paginationBox">
							<Pagination
								activePage={currentPage}
								itemsCountPerPage={resultPerPage}
								totalItemsCount={productsCount}
								onChange={setCurrentPageNo}
								nextPageText="Next"
								prevPageText="Prev"
								firstPageText="1st"
								lastPageText="Last"
								itemClass="page-item"
								linkClass="page-link"
								activeClass="pageItemActive"
								activeLinkClass="pageLinkActive"
							/>
						</div>
					)}
				</Fragment>
			)}
		</Fragment>
	);
};

export default Products;
