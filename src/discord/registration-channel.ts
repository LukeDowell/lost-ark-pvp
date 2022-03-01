import {CategoryChannel, Emoji, GuildEmoji, MessageEmbed, ReactionEmoji, TextChannel} from "discord.js";
import {ChannelTypes} from "discord.js/typings/enums";
import {PVP_EMOJIS} from "./emoji";

export const configureRegistrationChannel = async (parentCategory: CategoryChannel) => {
  const guild = parentCategory.guild
  const subCategories = guild.channels.cache.filter((c) => c.parent?.id === parentCategory?.id)

  let registrationChannel = subCategories.find((c) => c.name === "registration") as TextChannel
  if (!registrationChannel) {
    registrationChannel = await guild.channels.create(
      "registration",
      {
        type: ChannelTypes.GUILD_TEXT,
        parent: parentCategory.id,
        position: 0
      }) as TextChannel
  }

  const registrationEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Competitor Registration')
    .setDescription('Click the appropriate reaction for your region below')

  registrationChannel.send({ embeds: [registrationEmbed] }).then((response) => {
    PVP_EMOJIS.map((e) => e.name)
      .forEach((job) => {
        const id = response.guild?.emojis.cache.find((e) => e.name === job)?.id || ''
        response.react(id)
      })
    response.react(':artillerist:')
  })
}
