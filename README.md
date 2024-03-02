# 📺 Anitaku API

<img src="https://i.imgur.com/rxqMH46.png" align="right" height="350vw">

An open source anime streaming provider api with anitaku.to

`Anitaku API` allows you to view recent released episodes, popular and current season anime, search for any anime, and stream watch any anime.

## Installation
- Clone the repo
```sh
git clone https://github.com/Kenimarru/anitaku-api.git
```
- Install dependencies
```sh
npm install
```
- Run the server
```sh
npm start
```
That's it now the server is running on https://localhost:3000


## Usage
Simple api usage to get recent released episodes:
```js
fetch("https://anitaku-api.vercel.app/api/recent?page=1")
   .then((res) => res.json())
   .then((data) => console.log(data));
```

`Output`

```json
{
    "code": 200,
    "message": "success",
    "data": [
        "pagination": {
            "current": "1",
            "last": "5"
        },
        "data": [
            {
                "id": "undead-unluck-episode-21",
                "title": "Undead Unluck",
                "cover": "https://gogocdn.net/cover/undead-unluck-1708403714.png",
                "episode": "Episode 21"
            },
            {...}
        ]
    ]
}
```

## Deployment

You can deploy your own copy fork of the api on vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kenimarru/anitaku-api)

### Dependencies

- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors)
- [helmet](https://www.npmjs.com/package/helmet)
- [cheerio](https://www.npmjs.com/package/cheerio)
- [axios](https://www.npmjs.com/package/axios)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Licence

This project is licensed under the [GNU General Public License v3.0](LICENSE).