// app js

import express from "express";
// おみくじのrouterを読み込む
import { omikujiRouter } from "./routes/omikuji.route.js";
// じゃんけんのrouterを読みこむ
import { jankenRouter }  from "./routes/janken.router.js";


const app = express();
//POSTデータを受け取るために以下2行を追加
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3001;

// 編集
app.get("/", (req, res) =>{  // /はメインHP
    res.json({
        uri:"/",
        message:"Hello Node.js!",
    });
});

// おみくじのルーティングを変更する
app.use("/omikuji", (req, res)=> omikujiRouter(req, res));

// じゃんけんのルーティングを追加
app.use("/janken", (req, res)=> jankenRouter(req, res));

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});