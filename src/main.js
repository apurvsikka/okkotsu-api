import express, { json, urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";

import { router } from "./router.js";

export const server = express();

server.use(helmet());
server.use(cors());
server.use(json());
server.use(urlencoded({ extended: true }));

server.get("/", (req, res) => {
    res.status(200).json({
        code: 200,
        message: "success",
        docs: "https://github.com/Kenimarru/okkotsu-api/wiki/Documentation"
    });
});

server.use("/api", router);