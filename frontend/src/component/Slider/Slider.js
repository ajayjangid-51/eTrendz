import React from "react";
import "./Slider.scss";
import HoverProduct from "../Product/HoverProduct";
const slides = [
	{
		eachSlide:
			"url(https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?b=1&k=20&m=887360960&s=612x612&w=0&h=E5x1cyKJGiCkpsUU6TSCuVZDtvEYo1eS8igBdp9201k=)",
	},
	{
		// eachSlide: "url(https://unsplash.it/1900/1024/?image=497)",
		eachSlide:
			// "url(https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_960_720.jpg)",
			"url(https://cdn.wccftech.com/wp-content/uploads/2021/07/bravo15-20210531-1-1030x644.jpeg",
	},
	{
		// eachSlide: "url(https://unsplash.it/1900/1024/?image=291)",
		eachSlide: "url(https://images.freekaamaal.com/post_images/1663061023.JPG)",
	},

	{
		eachSlide:
			"url(https://t4.ftcdn.net/jpg/04/32/90/49/360_F_432904947_gZo76GgLC2eeDXTZAGXKQ9W3Juk3kDLH.jpg)",
	},
	{
		eachSlide:
			"url(https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg)",
	},
	{
		eachSlide:
			"url(https://cdn.thewirecutter.com/wp-content/media/2021/05/hair-clippers-2048px-1504.jpg)",
	},
];

const Slider = () => {
	const [active, setActive] = React.useState(0);
	const [autoplay, setAutoplay] = React.useState(1);
	const max = slides.length;

	const intervalBetweenSlides = () =>
		autoplay && setActive(active === max - 1 ? 0 : active + 1);

	React.useEffect(() => {
		const interval = setInterval(() => intervalBetweenSlides(), 3000);
		return () => clearInterval(interval);
	});

	const toggleAutoPlay = () => setAutoplay(!autoplay);

	const nextOne = () => active < max - 1 && setActive(active + 1);

	const prevOne = () => active > 0 && setActive(active - 1);

	const isActive = (value) => active === value && "active";

	const setSliderStyles = () => {
		const transition = active * -100;

		return {
			width: slides.length * 100 + "vw",
			transform: "translateX(" + transition + "vw)",
		};
	};

	const renderSlides = () =>
		slides.map((item, index) => (
			<div
				className="each-slide"
				key={index}
				style={{ backgroundImage: item.eachSlide }}
			></div>
		));

	const renderDots = () =>
		slides.map(
			(
				silde,
				index // check index
			) => (
				<li className={isActive(index) + " dots"} key={index}>
					<button onClick={() => setActive(index)}>
						<span>&#9679;</span>
					</button>
				</li>
			)
		);

	const renderPlayStop = () =>
		autoplay ? (
			<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
			</svg>
		) : (
			<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
			</svg>
		);

	const renderArrows = () => (
		<React.Fragment>
			<button type="button" className="arrows prev" onClick={() => prevOne()}>
				<svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
					<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</button>
			<button type="button" className="arrows next" onClick={() => nextOne()}>
				<svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
					<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</button>
		</React.Fragment>
	);

	return (
		<section className="slider">
			<HoverProduct />
			<div className="wrapper" style={setSliderStyles()}>
				{renderSlides()}
			</div>
			{renderArrows()}
			<ul className="dots-container">{renderDots()}</ul>
			<button type="button" className="toggle-play" onClick={toggleAutoPlay}>
				{renderPlayStop()}
			</button>
		</section>
	);
};

// ReactDOM.render(<Slider />, document.getElementById("app"));
export default Slider;
