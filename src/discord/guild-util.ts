import {Guild, GuildChannelCreateOptions, GuildChannelTypes} from "discord.js";

export async function findOrCreateChannel<T extends GuildChannelTypes>(guild: Guild,
                                                                         name: string,
                                                                         config: GuildChannelCreateOptions & { type: T }) {
  let channel = guild.channels.cache.find((c) => c.name === name)
  if (!channel) {
    channel = await guild.channels.create(name, config)
  }
}
