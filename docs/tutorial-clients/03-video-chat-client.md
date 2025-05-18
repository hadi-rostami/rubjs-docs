# SendLiveClient - کلایت پخش زنده

کلاسی برای مدیریت پخش زنده ویدیو با FFmpeg و تعامل با سرور برای دریافت اطلاعات استریم.

---

## وابستگی‌ها

- `ffmpeg` (باید روی سیستم نصب باشد)
- `ffprobe` (معمولا همراه ffmpeg نصب می‌شود)
- `child_process` (ماژول داخلی Node.js)

## متدها

| متد                                                     | توضیح                                                                                |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `constructor(client, title, object_guid, getVideoUrl?)` | مقداردهی اولیه با اطلاعات استریم و امکان گرفتن URL ویدیو به صورت async (اختیاری)     |
| `detectOrientation(filePath)`                           | تشخیص جهت ویدیو (افقی یا عمودی) با استفاده از ffprobe                                |
| `createLive(filePath?, startTime?)`                     | شروع پخش زنده ویدیو از مسیر مشخص یا اولین ویدیو در پلی‌لیست، امکان شروع از زمان مشخص |
| `stop()`                                                | توقف پخش زنده و ذخیره موقعیت فعلی پخش                                                |
| `getCurrentTime()`                                      | گرفتن زمان فعلی ویدیو با ffprobe و ذخیره آن                                          |
| `resume()`                                              | ادامه پخش زنده از زمان ذخیره شده                                                     |
| `next()`                                                | رفتن به ویدیوی بعدی در پلی‌لیست و پخش آن                                             |
| `previous()`                                            | بازگشت به ویدیوی قبلی در پلی‌لیست و پخش آن                                           |
| `addToPlaylist(filePath)`                               | افزودن ویدیو به پلی‌لیست                                                             |
| `removeFromPlaylist(filePath)`                          | حذف ویدیو از پلی‌لیست و تنظیم ایندکس فعلی در صورت نیاز                               |

---

## نمونه استفاده

```js
const { Client, Filters , SendLiveClient } = require("rubjs");

const client = new Client("client");
const object_guid = "g9fBWRR04cea01848526e52748c09e81";
const sendLiveClient = new SendLiveClient(client, "rubjs", object_guid);

client.onMessageUpdates([Filters.equalCommand("ساخت", object guid)], async (msg) => {
  await sendLiveClient.createlLive();
})

client.onMessageUpdates([Filters.startsWithCommand("add")], async (msg) => {
  sendlLiveClient.addToPlaylist(msg.message.text.split("add")[1].trim());
})

client.run();
```

## نکات

- این کلاس برای پخش زنده ویدیو با استفاده از FFmpeg طراحی شده است.
- برای کارکرد صحیح، `ffmpeg` و `ffprobe` باید روی سیستم نصب شده باشند.
- مدیریت پلی‌لیست و امکان ادامه پخش بعد از توقف از ویژگی‌های مهم آن است.
