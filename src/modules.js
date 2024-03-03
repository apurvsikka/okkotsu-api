import axios from "axios";
import { load } from "cheerio";
import dotenv from "dotenv";
dotenv.config();

const base_url = process.env.ANITAKU_URL

const getPagination = async (body) => {
    const $ = load(body);
    const page = $(".pagination ul li.selected a").text();
    const current = page ? parseInt(page) : null
    const last = parseInt($(".pagination ul li:last").text());

    const hasNext = current !== null && current < last

    const pagination = {
        current,
        last,
        hasNext
    }

    return pagination
}


export const getRecentEpisodes = async (page) => {
    const url = `${base_url}/home.html?page=${page}`
    const data = []
    const body = (await axios.get(url)).data
    const $ = load(body);
    $(".last_episodes ul li").each((index, element) => {
        const item = {
            id: $(element).find(".name a").attr("href").slice(1),
            title: $(element).find(".name a").text(),
            cover: $(element).find(".img img").attr("src"),
            episode: $(element).find(".episode").text()
        }
        data.push(item);
    });
    return { pagination: await getPagination(body), data }
}

export const getPopular = async (page) => {
    const url = `${base_url}/popular.html?page=${page}`
    const data = []
    const body = (await axios.get(url)).data
    const $ = load(body);
    $(".last_episodes ul li").each((index, element) => {
        const item = {
            id: $(element).find(".name a").attr("href").slice(10),
            title: $(element).find(".name a").text(),
            cover: $(element).find(".img img").attr("src")
        }
        data.push(item);
    });
    return { pagination: await getPagination(body), data }
}

export const getThisSeason = async (page) => {
    const url = `${base_url}/new-season.html?page=${page}`
    const data = []
    const body = (await axios.get(url)).data
    const $ = load(body);
    $(".last_episodes ul li").each((index, element) => {
        const item = {
            id: $(element).find(".name a").attr("href").slice(10),
            title: $(element).find(".name a").text(),
            cover: $(element).find(".img img").attr("src")
        }
        data.push(item);
    });
    return { pagination: await getPagination(body), data }
}

export const getMovies = async (page) => {
    const url = `${base_url}/anime-movies.html?page=${page}`
    const data = []
    const body = (await axios.get(url)).data
    const $ = load(body);
    $(".last_episodes ul li").each((index, element) => {
        const item = {
            id: $(element).find(".name a").attr("href").slice(10),
            title: $(element).find(".name a").text(),
            cover: $(element).find(".img img").attr("src")
        }
        data.push(item);
    });
    return { pagination: await getPagination(body), data }
}