import {Guild, GuildChannel} from "discord.js";

export const getIfExistsWithName: (guild: Guild, channel: GuildChannel) => Promise<GuildChannel | undefined> = (guild: Guild, channel: GuildChannel) => {
  return Promise.resolve(channel)
}
