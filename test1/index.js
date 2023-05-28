const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("hello, boy");
});

app.listen(process.env.PORT, () => {
	console.log("okay gtg");
});
