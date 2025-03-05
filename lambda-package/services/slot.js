const { SLOT_RULES } = require('../config/rules');

class SlotService {
  generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  determineResult(number) {
    const rule = SLOT_RULES.find(rule => 
      number >= rule.range[0] && number <= rule.range[1]
    );

    if (!rule) {
      throw new Error(`Invalid number generated: ${number}`);
    }

    return {
      number,
      ...rule
    };
  }

  formatMessage(result) {
    const { number, type, details } = result;
    const { calories, restrictions } = details;

    // 番号の範囲に応じたメッセージを取得
    let rangeMessage = '';
    if (number === 1) {
      rangeMessage = 'これは最悪の目だ！精進して修行するんだな！覚悟しろよ！';
    } else if (number <= 10) {
      rangeMessage = '厳しい目が出たな！耐えられるか？ハハハハ！';
    } else if (number <= 25) {
      rangeMessage = 'まだまだ甘くはないぞ！頑張って耐えるんだな！';
    } else if (number <= 50) {
      rangeMessage = '普通の目だな！これくらい余裕だろ？';
    } else if (number <= 75) {
      rangeMessage = 'なかなかいい目が出たじゃないか！ラッキーだな！';
    } else if (number <= 90) {
      rangeMessage = 'かなりいい目だ！今日はご機嫌だぞ！';
    } else if (number <= 97) {
      rangeMessage = '素晴らしい目だ！こんな目めったに出ないぞ！喜べ！';
    } else {
      rangeMessage = 'ジャックポット！最高の目だ！好きなものを食べていいぞ！ワハハハハ！';
    }

    // 新しいフォーマットでメッセージを構築
    let message = `🎰 ドゥルルルルルルル ${number}！\n ${rangeMessage}\n\n`;
    message += `タイプ: ${type}\n`;
    
    if (calories) {
      message += `カロリー目標: ${calories}kcal🔥 \n\n`;
    } else {
      message += '\n';
    }

    if (restrictions.length > 0) {
      message += 'ちゃんと守れよ！\n\n';
      restrictions.forEach(restriction => {
        message += `・${restriction}\n`;
      });
    } else {
      message += 'ちゃんと守れよ！\n';
    }

    return message;
  }
}

module.exports = new SlotService();
