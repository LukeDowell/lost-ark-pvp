import {CategoryChannel} from "discord.js";
import {ChannelTypes} from "discord.js/typings/enums";

export const configureSparringChannel = async (parentCategory: CategoryChannel) => {
  const guild = parentCategory.guild
  const subCategories = guild.channels.cache.filter((c) => c.parent?.id === parentCategory?.id)

  let sparringChannel = subCategories.find((c) => c.name === "sparring")
  if (!sparringChannel) {
    sparringChannel = await guild.channels.create(
      "sparring",
      {
        type: ChannelTypes.GUILD_TEXT,
        parent: parentCategory.id,
        position: 2
      })
  }
}
