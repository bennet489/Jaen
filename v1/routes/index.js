import express from "express";
import Auth from "./auth.js";
import { Verify, VerifyRole } from "../middleware/verify.js";

const Router = (server) => {
    // Use Auth routes
    server.use('/v1/auth', Auth);

    // Define home route
    server.get("/v1", (req, res) => {
        try {
            res.status(200).json({
                status: "success",
                data: [],
                message: "Welcome to our API homepage!",
            });
        } catch (err) {
            res.status(500).json({
                status: "error",
                message: "Internal Server Error",
            });
        }
    });

    // Define user route
    server.get("/v1/user", Verify, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to your Dashboard!",
        });
    });

    // Define admin route
    server.get("/v1/admin", Verify, VerifyRole, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the Admin Portal!",
        });
    });
};

// Export the Router function
export default Router;