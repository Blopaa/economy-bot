import axios from 'axios';

export class Services {
  async getConfigColumn(serverId: string, columnName: string) {
    let res: any;
    try {
      const {
        data,
      } = await axios.get(
        `${process.env.API_URL}server-settings/column/${serverId}/${columnName}`,
        { headers: { 'bot-token': process.env.BOT_TOKEN_API } }
      );
      res = data;
    } catch (err) {
      // console.log(err.response.data);
    }
    return res;
  }

  async getCoins(serverId: string, userId: string) {
    let res: any;
    try {
      const {
        data,
      } = await axios.get(
        `${process.env.API_URL}user-server/coins/${userId}/${serverId}`,
        { headers: { 'bot-token': process.env.BOT_TOKEN_API } }
      );
      res = data;
    } catch (err) {
      throw new err();
    }
    return res;
  }

  async getUserByDiscordId(discordId: string) {
    let res: any;
    try {
      const { data } = await axios.get(
        `${process.env.API_URL}user/${discordId}`,
        {
          headers: { 'bot-token': process.env.BOT_TOKEN_API },
        }
      );
      res = data;
    } catch (err) {
      throw new err();
    }
    return res;
  }

  async createServer(serverName: string, serverId: string): Promise<void> {
    try {
      await axios.post(
        `${process.env.API_URL}server`,
        { name: serverName, serverId: serverId },
        {
          headers: { 'bot-token': process.env.BOT_TOKEN_API },
        }
      );
    } catch (err) {
      throw err;
    }
  }

  async createUser(userDiscordId: string, discordTag: string): Promise<void> {
    try {
      await axios.post(
        `${process.env.API_URL}user`,
        { discordId: userDiscordId, discordTag: discordTag },
        {
          headers: { 'bot-token': process.env.BOT_TOKEN_API },
        }
      );
    } catch (err) {
      throw err;
    }
  }

  async createUserServer(serverId: string, userId: string): Promise<void> {
    try {
      await axios.post(
        `${process.env.API_URL}user-server/add/${serverId}/${userId}`,
        undefined,
        {
          headers: { 'bot-token': process.env.BOT_TOKEN_API },
        }
      );
    } catch (err) {
      throw err;
    }
  }

  async setConfigColumn(
    serverId: string,
    columnName: string,
    newValue: string | number
  ) {
    try {
      await axios.put(
        `${process.env.API_URL}server-settings/${serverId}`,
        { columnName: columnName, newValue: newValue },
        {
          headers: { 'bot-token': process.env.BOT_TOKEN_API },
        }
      );
    } catch (err) {
      throw err;
    }
  }
  async winCoins(serverId: string, userId: string) {
    try {
      await axios.put(
        `${process.env.API_URL}user-server/coins`,
        { serverId: serverId, userId: userId },
        {
          headers: { 'bot-token': process.env.BOT_TOKEN_API },
        }
      );
    } catch (err) {
      throw err;
    }
  }
  async shareCoins(
    serverId: string,
    payerId: string,
    payedId: string,
    customCoinsSet: number
  ) {
    try {
      await axios.put(
        `${process.env.API_URL}user-server/sharecoins`,
        {
          serverId: serverId,
          payerId: payerId,
          payedId: payedId,
          customCoinsSet: customCoinsSet,
        },
        {
          headers: { 'bot-token': process.env.BOT_TOKEN_API },
        }
      );
    } catch (err) {
      throw err;
    }
  }
}
