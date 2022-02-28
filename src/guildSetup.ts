import {Client} from "discord.js";
import {ChannelTypes} from "discord.js/typings/enums";

export const setupChannels = (client: Client) => {
  client.guilds.cache.forEach(async (guild) => {
    let pvpCategory = guild.channels.cache.find((c) => c.name === "PVP Matchmaking")
    if (!pvpCategory) {
      pvpCategory = await guild.channels.create("PVP Matchmaking", {type: "GUILD_CATEGORY"})
    }

    const subCategories = guild.channels.cache.filter((c) => c.parent?.id === pvpCategory?.id)

    if (!subCategories.find((c) => c.name === "3v3-ranked")) {
      guild.channels.create(
        "3v3-ranked",
        {
          type: ChannelTypes.GUILD_TEXT,
          parent: pvpCategory.id,
          position: 0
        }).catch((err) => console.error(err))
    }

    if (!subCategories.find((c) => c.name === "sparring")) {
      guild.channels.create(
        "sparring",
        {
          type: ChannelTypes.GUILD_TEXT,
          parent: pvpCategory.id,
          position: 0
        }).catch((err) => console.error(err))
    }
  })
}
