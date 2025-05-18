#  VoiceChatClient | کلاینت پخش موزیک

کلاس `VoiceChatClient` برای پخش صدا در چت صوتی گروهی طراحی شده است. این کلاس از `wrtc` برای ارسال صدا با WebRTC و از `ffmpeg` برای تبدیل فرمت صدا استفاده می‌کند.

---

##  وابستگی‌ها

- `wrtc` (به‌صورت اختیاری و با `optional-require`)
- `ffmpeg` (باید روی سیستم نصب شده باشد)
- `child_process` (ماژول داخلی Node.js)
- `optional-require`

---

##  ساختار کلاس

### متدها

| متد | توضیح |
|------|-------|
| `constructor(getMusicUrl?)` | مقداردهی اولیه PeerConnection و منابع صوتی. `getMusicUrl` یک تابع async برای دریافت لینک آهنگ است. |
| `joinVoiceChat(chatGuid, voiceChatId, client)` | اتصال به یک چت صوتی مشخص با استفاده از اطلاعات `client` |
| `play(filePath?)` | پخش آهنگ از فایل یا URL دریافت‌شده از `getMusicUrl` |
| `stop()` | توقف فوری پخش فعلی و پاک‌سازی بافر |
| `resume()` | ادامه پخش از محل توقف قبلی |
| `next()` | پخش آهنگ بعدی در لیست پخش |
| `previous()` | بازگشت به آهنگ قبلی در لیست پخش |
| `addToPlaylist(filePath)` | افزودن یک مسیر آهنگ به لیست پخش |
| `removeFromPlaylist(filePath)` | حذف آهنگ از لیست پخش (و تنظیم ایندکس پخش) |

---

## نمونه استفاده
```js
const { Client, Filters , VoiceChatClient } = require("rubjs");

const bot = new Client("bot", 20000, "Web");
const clientVoiceChat = new VoiceChatClient();
const object_guid = "g9fBWRR04cea01848526e52748c09e81";

for (let index = 1; index <= 4; index++) {
  clientVoiceChat.addToPlaylist(`./musics${index}.mp3`)
}

bot.onMessageUpdates([Filters.equalCommand("play", object_guid)], async (message) => {
  const data = await message.client.getGroupInfo(message.object_guid);

  await clientVoiceChat.joinVoiceChat(
    message.object_guid,
    data.chat.group_voice_chat_id,
    message.client
  );

  await clientVoiceChat.play();
});

bot.onMessageUpdates([Filters.equalCommand("next", object_guid)], async (message) => {
  clientVoiceChat.next();
});
bot.onMessageUpdates([Filters.equalCommand("stop", object_guid)], async (message) => {
  clientVoiceChat.stop();
});
bot.onMessageUpdates([Filters.equalCommand("resume", object_guid)], async (message) => {
  clientVoiceChat.resume();
});
bot.onMessageUpdates([Filters.equalCommand("previous", object_guid)], async (message) => {
  clientVoiceChat.previous();
});

bot.run();
```

## نکات
- باید `FFmpeg` در سیستم نصب و قابل دسترسی باشد.
- ماژول `wrtc` باید دستی نصب شود (`npm i wrtc`)
- فقط فایل‌های صوتی با فرمت‌های قابل پشتیبانی توسط `FFmpeg` قابل پخش هستند.