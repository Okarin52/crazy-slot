const axios = require('axios');

class DiscordService {
  constructor() {
    this.webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  }

  async sendMessage(message) {
    if (!this.webhookUrl) {
      throw new Error('Discord webhook URL is not configured');
    }

    try {
      await axios.post(this.webhookUrl, {
        content: message
      });
    } catch (error) {
      console.error('Failed to send Discord message:', error.message);
      throw error;
    }
  }
}

module.exports = new DiscordService();
