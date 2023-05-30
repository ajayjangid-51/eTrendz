import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

import MetaData from "../MetaData";
const Contact = () => {
	return (
		<div className="contactContainer">
			<MetaData title="Contact -- Etrendz" />

			<a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
				{/* <Button> */}
				<h2 style={{ color: "black" }}>Contact: icode511@gmail.com</h2>
				{/* </Button> */}
			</a>
		</div>
	);
};

export default Contact;
