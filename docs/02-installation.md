---
sidebar_position: 2
---

# نصب و راه‌اندازی RubJS

برای شروع استفاده از `rubjs` ابتدا باید Node.js روی سیستم شما نصب باشد. نسخه‌ی ۱۸ یا بالاتر توصیه می‌شود.

## مراحل نصب

1. ایجاد یک پوشه‌ی جدید برای پروژه‌ی ربات:

```bash
mkdir my-rubjs-bot
cd my-rubjs-bot
```
2. ایجاد یک پروژه‌ی Node.js:
```bash
npm init -y
```

3. نصب بسته‌ی rubjs:
```bash
npm install rubjs
```

4. ساخت اولین فایل ربات:

یک فایل جدید به نام `index.js` ایجاد کنید و کد زیر را در آن قرار دهید:
```js
const { Client } = require("rubjs");

const bot = new Client("bot");

bot.onMessageUpdates(async (message) => {
  await message.reply("سلام! ربات rubjs شما فعال شد.");
});

bot.run();
```

5. اجرای ربات:
```bash
node index.js
```

اگر همه مراحل را درست انجام داده باشید، ربات شما فعال خواهد شد و پیام خوش‌آمدگویی ارسال می‌کند.