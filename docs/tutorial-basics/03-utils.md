---
sidebar_position: 1
---

# کلاس Utils

کلاس `Utils` مجموعه‌ای از متدهای کمکی برای فرمت‌دهی متن در پیام‌هاست. این متدها معمولاً در سیستم‌هایی که از Markdown یا فرمت مشابه پشتیبانی می‌کنند، مثل پیام‌رسان‌ها یا ربات‌ها، استفاده می‌شوند.

---

## مثال استفاده

```ts
import { Client ,Filters , Utils } from 'rubjs';

const bot = new Client("bot")

bot.onMessageUpdates([Filters.equalCommand("ربات")],async (message) =>
    await message.reply(`Hello ${Utils.Code("from")} ${Utils.Bold("RubJS")}`)
);

bot.run()
```

## 🔧 متدها

### Utils.Code(text: string): string
قرار دادن متن بین backtick برای نمایش به صورت کد
```js
Utils.Code("hello"); // "`hello`"
```

---

### Utils.Bold(text: string): string
قرار دادن متن بین `**` برای نمایش به صورت Bold.
```js
Utils.Bold("bold"); // "**bold**"
```

---

### Utils.Italic(text: string): string
نمایش متن به صورت ایتالیک با قرار دادن بین `__`.
```js
Utils.Italic("italic"); // "__italic__"
```

---

### Utils.Spoiler(text: string): string
پنهان کردن متن به صورت اسپویلر با `||`.
```js
Utils.Spoiler("secret"); // "||secret||"
```

---

### Utils.Strike(text: string): string
نمایش متن با خط خورده مثل این با `~~`.
```js
Utils.Strike("wrong"); // "~~wrong~~"
```

---

### Utils.Underline(text: string): string
شبیه به زیرخط‌دار با `--` ( سفارشی ).
```js
Utils.Underline("underline"); // "--underline--"
```

---

### Utils.Quote(text: string): string
استفاده از `^^` برای نقل قول ( سفارشی ).
```js
Utils.Quote("quote"); // "^^quote^^"
```

---

### Utils.HyperLink(text: string, link: string): string
ایجاد لینک با فرمت [text] (url).
```js
Utils.HyperLink("گوگل", "https://google.com"); // "[گوگل](https://google.com)"
```