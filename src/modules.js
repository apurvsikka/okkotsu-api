import axios from "axios";
import { load } from "cheerio";

const getPagination = async (body) => {
    const $ = load(body);
    const pagination = {
        current: $(".pagination ul li.selected a").text() ? $(".pagination ul li.selected a").text() : null,
        last: $(".pagination ul li:last").text()
    }
    return pagination
}

export const getRecentEpisodes = async (page) => {
    const url = `https://anitaku.to/home.html?page=${page}`
    const data = []
    const body = (await axios.get(url)).data
    const $ = load(body);
    $(".last_episodes ul li").each((index, element) => {
        const item = {
            id: $(element).find("p.name a").attr("href").slice(1),
            title: $(element).find(".name a").text(),
            cover: $(element).find(".img img").attr("src"),
            episode: $(element).find(".episode").text()
        }
        data.push(item);
    });
    return { pagination: await getPagination(body), data }
}

export const getPopular = async (page) => {
    const url = `https://anitaku.to/popular.html?page=${page}`
    const data = []
    const body = (await axios.get(url)).data
    const $ = load(body);
    $(".last_episodes ul li").each((index, element) => {
        const item = {
            id: $(element).find("p.name a").attr("href").slice(10),
            title: $(element).find(".name a").text(),
            cover: $(element).find(".img img").attr("src")
        }
        data.push(item);
    });
    return { pagination: await getPagination(body), data }
}