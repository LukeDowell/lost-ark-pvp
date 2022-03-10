import {Snowflake} from "discord-api-types/globals";

export interface PvpGuild {
  id: Snowflake
  parentCategoryId: Snowflake,
  registrationChannelId: Snowflake,
  tdmChannel: Snowflake,
  sparringChannel: Snowflake,
}
