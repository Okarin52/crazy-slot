require('dotenv').config();
const slotService = require('./services/slot');
const discordService = require('./services/discord');

async function main() {
  try {
    // スロット番号の生成
    const number = slotService.generateNumber();
    
    // 結果の判定
    const result = slotService.determineResult(number);
    
    // メッセージの作成
    const message = slotService.formatMessage(result);
    
    // Discordへの通知
    await discordService.sendMessage(message);
    
    console.log('Successfully sent message to Discord');
  } catch (error) {
    console.error('Error occurred:', error.message);
    throw error;
  }
}

// Lambda環境での実行用
exports.handler = async (event) => {
  try {
    await main();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

// ローカル環境での実行用
if (require.main === module) {
  main().catch(console.error);
}
