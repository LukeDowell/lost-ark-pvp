import {CategoryChannel, MessageEmbed, TextChannel} from "discord.js";
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

  const classEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Competitor Registration')
    .setDescription('Click t he appropriate reaction for your region below')

  const existingEmbed = registrationChannel.messages.cache.find(
    (m) => {
      return m.embeds.some((e) => e.title === classEmbed.title)
    }
  )

  if (!existingEmbed) {
    console.log("No existing embed!")
    registrationChannel.send({ embeds: [classEmbed] }).then((response) => {
      PVP_EMOJIS.map((e) => e.name)
        .forEach((job) => {
          const id = response.guild?.emojis.cache.find((e) => e.name === job)?.id || ''
          response.react(id)
        })
    })
  }
}
