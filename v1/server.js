import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { PORT, URI } from "./config/index.js";
import Router from "./routes/index.js";

// creating server
const server = express();

// configure header information
// allow request from any sources. In production, this should be limit to all
server.use(cors());
server.disable("x-powered-by"); // reduce fingerprinting
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// connect database
// set up mongoose's promise to global promise
mongoose.promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
    .connect(URI, {
        useNewUrlParser: true,
    })
    .then(console.log("Connection to database is Successful"))
    .catch((err) => console.log(err));

// configure routes
// connect Route handler to server
Router(server);

// start up server
server.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);