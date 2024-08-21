import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function Verify(req, res, next) {
    try {
        const authHeader = req.headers["cookie"]; // get the sesssion cookie from the header

        if (!authHeader) return res.sendStatus(401);
        const cookie = authHeader.split("=")[1];
        const accessToken = cookie.split(";")[0];
        const checkIfBlacklisted = await Blacklist.findOne({ token: accessToken });
        if (checkIfBlacklisted)
            return res
                .status(401)
                .json({ message: "This session has expired. Please login" });

        jwt.verify(accessToken, config.SECRET_ACCESS_TOKEN, async (err, decoded) => {
            if (err) {
                return res
                .status(401)
                .json({ message: "This session has expired. Please login"});
            }

        const { id } = decoded; // get user id from the decoded token
        const user = await User.findById(id); // find user by that `id`
        const { password, ...data } = user._doc;
        req.user = data;
        next();
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
}

export function VerifyRole(req, res, next) {
    try {
        const user = req.user;
        const { role } = user;

        if (role !== "0x88") {
            return res.status(401).json({
                status: "failed",
                message: "You are not authorized to view this page.",
            });
        }
        next();
    } catch (err) { 
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Internal Server Error",
        });
    }
}