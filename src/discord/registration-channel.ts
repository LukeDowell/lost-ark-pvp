import {CategoryChannel, MessageEmbed, TextChannel} from "discord.js";
import {ChannelTypes} from "discord.js/typings/enums";

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
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
      { name: 'Regular field title', value: 'Some value here' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()

  registrationChannel.send({ embeds: [registrationEmbed] })
}
