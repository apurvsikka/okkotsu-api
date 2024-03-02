import { Router } from "express";
import { getRecentEpisodes, getPopular, getThisSeason } from "./modules.js";
export const router = Router();

router.get("/recent", async (req, res) => {
    try {
        res.status(200).json({
            code: 200,
            message: "success",
            data: await getRecentEpisodes(req.query.page)
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            type: error.name,
            message: error.message
        });
    }
});

router.get("/popular", async (req, res) => {
    try {
        res.status(200).json({
            code: 200,
            message: "success",
            data: await getPopular(req.query.page)
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            type: error.name,
            message: error.message
        });
    }
});

router.get("/season", async (req, res) => {
    try {
        res.status(200).json({
            code: 200,
            message: "success",
            data: await getThisSeason(req.query.page)
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            type: error.name,
            message: error.message
        });
    }
});