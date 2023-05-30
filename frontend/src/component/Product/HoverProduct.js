import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useHistory } from "react-router-dom";
// import Slider from "../Slider/Slider";
// import Slider from "../Slider/Slider";
// import Slider from "../Slider/Slider2";

const HoverProduct = () => {
	const dispatch = useDispatch();
	const { product, loading, error } = useSelector(
		(state) => state.productDetails
	);
	const productid = "6475d2ebc841f30334d70a6f";
	const history = useHistory();
	console.log(product.images?.length);
	useEffect(() => {
		dispatch(getProductDetails(productid));
	}, [dispatch]);
	return (
		<Fragment>
			<div
				onClick={() => history.push(`/product/${productid}`)}
				className="hoverproduct"
				style={{
					position: "absolute",
					top: "30vh",
					zIndex: "1000",
					left: "13vw",
					// border: "2px solid",
					width: "fit-content",
					cursor: "pointer",
				}}
			>
				{/* <div> */}
				<Carousel>
					{product.images &&
						product.images.map((item, i) => (
							<img
								className="CarouselImage"
								key={i}
								src={item.url}
								alt={`${i} Slide`}
								style={{ borderRadius: "2vh" }}
							/>
						))}
				</Carousel>
				{/* <Slider2 slids={product.images && product.images} /> */}
				{/* <Slider /> */}
			</div>
			{/* </Link> */}
		</Fragment>
	);
};

export default HoverProduct;
