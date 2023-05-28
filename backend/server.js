/* const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to Uncaught Exception`);
	process.exit(1);
});

// Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
// require("dotenv").config({ path: "config/config.env" });
// }
// require("dotenv").config();

// Connecting to database
connectDatabase();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
	console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to Unhandled Promise Rejection`);

	server.close(() => {
		process.exit(1);
	});
});
 */
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const MONGO_ATLAS =
	"mongodb+srv://icode511:ch57v3TzccQPU1HD@cluster0.lr8zze5.mongodb.net/";

const connect = () => {
	mongoose
		// .connect(process.env.MONGO_ATLAS)
		.connect(MONGO_ATLAS)
		.then(() => {
			console.log("Connected to DB");
		})
		.catch((err) => {
			console.log("error in connecting monogodb");
			throw err;
		});
};

//middlewares
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hei , hello");
});

//error handler
app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || "Something went wrong!";
	return res.status(status).json({
		success: false,
		status,
		message,
	});
});

app.listen(process.env.PORT, () => {
	connect();
	console.log("Connected to Server");
});
