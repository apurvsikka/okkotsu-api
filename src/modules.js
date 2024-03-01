import axios from "axios";
import { load } from "cheerio";

export const getRecentEpisodes = async () => {
    const url = "https://anitaku.to/home.html"
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
    return data
}