import {CategoryChannel, Client} from "discord.js";
import {configureRegistrationChannel} from "./registration-channel";
import {configureTeamRankedChannel} from "./team-ranked-channel";
import {configureSparringChannel} from "./sparring-channel";

export const setupChannels = (client: Client) => {
  client.guilds.cache.forEach(async (guild) => {
    let pvpCategory = guild.channels.cache.find((c) => c.name === "PVP Matchmaking")
    if (!pvpCategory) {
      pvpCategory = await guild.channels.create("PVP Matchmaking", {type: "GUILD_CATEGORY"})
    }

    Promise.all([
      configureRegistrationChannel(pvpCategory as CategoryChannel),
      configureTeamRankedChannel(pvpCategory as CategoryChannel),
      configureSparringChannel(pvpCategory as CategoryChannel)
    ]).catch(console.error)
  })
}
