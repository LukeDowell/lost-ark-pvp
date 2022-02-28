import {Client, Message} from "discord.js";

export interface Lobby {
  id: string,
  members: Competitor[]
}

export interface Team {
  id: string,
  name: string,
  members: Competitor[]
}

export interface Competitor {
  id: string,
  name: string
}

export const registerCompetitor = async (message: Message, client: Client) => {
  console.log('Registering {}', message.author.username)
  await message.reply({ content: "Welcome, you're going to be registered" })
}
