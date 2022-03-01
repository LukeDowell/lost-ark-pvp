import fs from "fs";
import path from "path";
import {Guild} from "discord.js";

export interface PvpEmoji {
  name: string,
  image: Buffer
}

export const PVP_EMOJIS: PvpEmoji[] = [
  'artillerist', 'bard', 'berserker', 'deadeye', 'deathblade', 'gunlancer',
  'gunslinger', 'paladin', 'scrapper', 'shadowhunter', 'sharpshooter', 'sorceress',
  'soulfist', 'striker', 'wardancer'
].map((job) => { return {
  name: job,
  image: fs.readFileSync(path.join(__dirname, `../assets/${job}-icon.png`))
}})

export const configureEmojis = async (guild: Guild) => PVP_EMOJIS
  .filter((emojiToAdd) => !guild.emojis.cache.find((e) => e.name === emojiToAdd.name))
  .forEach((emojiToAdd) => guild.emojis.create(emojiToAdd.image, emojiToAdd.name))
