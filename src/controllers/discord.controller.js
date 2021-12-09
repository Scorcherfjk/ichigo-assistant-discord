const RequestService = require("../services/request.service");

class DiscordController {
  constructor() {
    this.fetch = new RequestService();
  }

  transformPayload(payload) {
    const { content, id, author, channel, createdTimestamp } = payload;
    const { type } = channel;
    const { username } = author;
    return {
      id,
      content,
      type,
      username,
      createdTimestamp,
    };
  }

  async receive(msg) {
    const payload = this.transformPayload(msg);
    const data = await this.fetch.sendMessage(payload);

    return data;
  }
}

module.exports = DiscordController;
