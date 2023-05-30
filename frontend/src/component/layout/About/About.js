import React from "react";
import "./aboutSection.css";
import MetaData from "../MetaData";
const About = () => {
	const visitInstagram = () => {
		window.location = "https://instagram.com/";
	};
	return (
		// <div className="aboutSection">
		// 	{/* <div></div> */}
		// 	<div className="aboutSectionGradient"></div>
		// 	<div className="aboutSectionContainer">
		// 		<Typography component="h1">About Us</Typography>

		// 		<div>
		// 			<div>
		// 				<Avatar
		// 					style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
		// 					// src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
		// 					alt="Developer"
		// 				/>
		// 				<Typography>Icode</Typography>
		// 				<Button onClick={visitInstagram} color="primary">
		// 					Visit Instagram
		// 				</Button>
		// 				<span>Most Affordable To your own Brand!</span>
		// 			</div>
		// 			{/* {<div className="aboutSectionContainer2"> */}
		// 			{/* <Typography component="h2">Our Brands</Typography> */}
		// 			{/* <a href="#" target="blank"> */}
		// 			{/* <YouTubeIcon className="youtubeSvgIcon" /> */}
		// 			{/* What'sUpChat */}
		// 			{/* </a> */}

		// 			{/* <a href="https://instagram.com/" target="blank"> */}
		// 			{/* <InstagramIcon className="instagramSvgIcon" />
		// 					//  */}
		// 			{/* YouFlix */}
		// 			{/* </a> */}
		// 			{/* </div>} */}
		// 		</div>
		// 	</div>
		// </div>

		<div
			className="aboutpage"
			style={{ display: "flex", justifyContent: "center" }}
		>
			<MetaData title="About -- Etrendz" />

			<h2>I'm About</h2>
		</div>
	);
};

export default About;
