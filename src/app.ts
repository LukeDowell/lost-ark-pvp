import {Client, Intents, Interaction} from 'discord.js'
import 'dotenv/config'
import {REST} from "@discordjs/rest";
import { SlashCommandBuilder } from "@discordjs/builders";
import {Routes} from "discord-api-types/v9";
import {registerCompetitor} from "./pvp";

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
  ],
})

const restClient = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN!!);

(async () => {
  try {
    const command = new SlashCommandBuilder()
      .setName("info")
      .setDescription("this is a description")
      .addUserOption(option => option.setName("a user option").setDescription("a user description"))
      .addBooleanOption(option => option.setName("a boolean option").setDescription("a boolean description"))

    await restClient.put(
      Routes.applicationGuildCommands(process.env.DISCORD_APPLICATION_ID!!, process.env.GUILD_ID!!),
      {
        headers: { "Content-Type": "application/json" },
        body: [JSON.stringify(command.toJSON())],
        passThroughBody: true
      }
    ).then(() => console.log("success!"))
  } catch (err) { console.error('rest error {}', err)}
})();

client.on("interactionCreate", (interaction: Interaction) => {
  console.log('Interaction found {}', interaction)
})

client.on('guildMemberAdd', (guildMember) => {
  console.log('Guild member joined {}', guildMember)
})

client.on("messageCreate", (message) => {
  console.log('Message found {}', message)
  if (message.content.toLowerCase().includes('register') && message.author != client.user) {
    registerCompetitor(message, client)
  }
})

client.on("messageReactionAdd", (message) => {
  console.log('Message reaction found {}', message)
})

client.login(process.env.DISCORD_BOT_TOKEN).then((val) => {
  console.log('Login successful')
});
