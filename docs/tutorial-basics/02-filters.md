---
sidebar_position: 1
---

# کلاس Filters

کلاس `Filters` مجموعه‌ای از توابع کمکی است که برای بررسی و فیلتر کردن پیام‌های دریافتی در ربات روبیکا استفاده می‌شود. این کلاس به شما کمک می‌کند پیام‌ها را بر اساس نوع، محتوا و ویژگی‌های مختلفشان تشخیص دهید.

---

## مثال استفاده

```js
import { Client ,Filters } from 'rubjs';

const client = new Client("client")

client.onMessageUpdates([Filters.isText] , async (message)=> console.log(message))

client.run()
```


---

## متدها

### findKey(message: any, key: string): any

- **توضیح:** جستجو در یک شیء پیام (که ممکن است شامل ساختارهای تو در تو باشد) برای یافتن کلیدی خاص.
- **ورودی‌ها:**
  - `message`: شیء پیام که در آن جستجو انجام می‌شود.
  - `key`: نام کلیدی که باید پیدا شود.
- **خروجی:** مقدار متناظر با کلید، یا `undefined` اگر کلید پیدا نشود.

---

### guidType(message: MessageUpdate, startWith: string): boolean

- **توضیح:** بررسی می‌کند که آیا شناسه (`object_guid`) پیام با یک رشته خاص شروع می‌شود یا خیر.
- **ورودی‌ها:**
  - `message`: پیام مورد بررسی.
  - `startWith`: رشته‌ای که `object_guid` باید با آن شروع شود.
- **خروجی:** مقدار بولی (true/false).

---

### isMention(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که آیا پیام شامل منشن (ذکر کاربر) است یا خیر.

---

### isMarkdown(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که آیا پیام دارای فرمت Markdown است یا خیر.

---

### isReply(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که آیا پیام پاسخی به پیام دیگری است یا خیر.

---

### isEdited(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که آیا پیام ویرایش شده است یا خیر.

---

### isLink(message: MessageUpdate): boolean

- **توضیح:** تشخیص وجود لینک یا اشاره به آدرس روبیکا در متن پیام.

---

### isText(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام دارای متن است یا خیر.

---

### isGroup(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام از گروه است (شناسه با `g0` شروع می‌شود).

---

### isChannel(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام از کانال است (شناسه با `c0` شروع می‌شود).

---

### isPrivate(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام از چت خصوصی است (شناسه با `u0` شروع می‌شود).

---

### isForward(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که آیا پیام فوروارد شده است یا خیر.

---

### fileInline(message: MessageUpdate): FileInline | undefined

- **توضیح:** استخراج فایل inline موجود در پیام (اگر وجود داشته باشد).

---

### isFileInline(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام نوع فایل Inline یا Caption باشد.

---

### isFile(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام حاوی فایل است یا خیر.

---

### isPhoto(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل عکس است یا خیر.

---

### isSticker(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل استیکر است یا خیر.

---

### isVideo(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل ویدیو است یا خیر.

---

### isVoice(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل صدای ضبط شده است یا خیر.

---

### isGif(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل گیف است یا خیر.

---

### isMusic(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل فایل موسیقی است یا خیر.

---

### isLocation(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل موقعیت مکانی است یا خیر.

---

### isContact(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل اطلاعات مخاطب است یا خیر.

---

### isPoll(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل نظرسنجی است یا خیر.

---

### isLive(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل داده‌های زنده است یا خیر.

---

### isEvent(message: MessageUpdate): boolean

- **توضیح:** بررسی می‌کند که پیام شامل داده‌های رویداد است یا خیر.

---

### isLength(length: number, object_guid?: string)

- **توضیح:** فیلتر تابعی که بررسی می‌کند متن پیام دقیقاً به طول مشخصی باشد. اگر `object_guid` داده شود، فقط پیام‌هایی با آن شناسه در نظر گرفته می‌شوند.
- **ورودی‌ها:**
  - `length`: طول متن مورد انتظار.
  - `object_guid` (اختیاری): شناسه مخصوص پیام.
- **خروجی:** تابعی که پیام را می‌پذیرد و نتیجه بولی بازمی‌گرداند.

---

### startsWithCommand(text: string, object_guid?: string, length?: number)

- **توضیح:** فیلتر تابعی که بررسی می‌کند متن پیام با رشته مشخصی شروع شود. همچنین می‌توان طول پیام را بررسی کرد و محدود به شناسه خاصی بود.
- **ورودی‌ها:**
  - `text`: متن شروع کننده مورد نظر.
  - `object_guid` (اختیاری): شناسه پیام.
  - `length` (اختیاری): طول دقیق متن.
- **خروجی:** تابعی با ورودی پیام و خروجی بولی.

---

### equalCommand(text: string, object_guid?: string)

- **توضیح:** فیلتر تابعی که بررسی می‌کند متن پیام دقیقاً برابر با متن داده شده باشد، با امکان محدود کردن به شناسه خاص.
- **ورودی‌ها:**
  - `text`: متن دقیق مورد نظر.
  - `object_guid` (اختیاری): شناسه پیام.
- **خروجی:** تابعی که پیام را می‌پذیرد و نتیجه بولی بازمی‌گرداند.
