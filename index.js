import express from "express";
import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv'

dotenv.config()

const TOKEN = process.env.TOKEN
const PORT = process.env.PORT || 3000

const bot = new Telegraf(TOKEN);
const app = express();

// Set the bot API endpoint
app.use(await bot.createWebhook({ domain: 'https://ox-sarong.cyclic.app' }));

bot.on("text", ctx => ctx.reply("Hello"));

app.listen(PORT, () => console.log("Listening on port", PORT));