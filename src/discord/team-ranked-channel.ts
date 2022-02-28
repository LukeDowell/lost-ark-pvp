import {CategoryChannel} from "discord.js";
import {ChannelTypes} from "discord.js/typings/enums";

export const configureTeamRankedChannel = async (parentCategory: CategoryChannel) => {
  const guild = parentCategory.guild
  const subCategories = guild.channels.cache.filter((c) => c.parent?.id === parentCategory?.id)

  let teamRankedChannel = subCategories.find((c) => c.name === "3v3-ranked")
  if (!teamRankedChannel) {
    teamRankedChannel = await guild.channels.create(
      "3v3-ranked",
      {
        type: ChannelTypes.GUILD_TEXT,
        parent: parentCategory.id,
        position: 1
      })
  }
}
