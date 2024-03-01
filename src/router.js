import { Router } from "express";
import { getRecentEpisodes } from "./modules.js";
export const router = Router();

router.get("/recent", async (req, res) => {
    try {
        res.status(200).json({
            code: 200,
            message: "success",
            data: await getRecentEpisodes()
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            type: error.name,
            message: error.message
        });
    }
});