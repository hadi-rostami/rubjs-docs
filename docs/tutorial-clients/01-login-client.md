# LoginClient – کلاینت ورود با شماره تلفن

LoginClient یکی از اجزای اصلی کتابخانه rubjs است که امکان ورود کاربران از طریق شماره تلفن را فراهم می‌کند. این ماژول با ارسال کد تأیید به تلفن و مدیریت نشست (Session) پس از تأیید، فرآیند احراز هویت را کامل می‌کند.


## شروع سریع (Quick Start)
```js
const { Client, Filters, LoginClient } = require("rubjs");

const client = new Client("client");
let loginData = {};

client.onMessageUpdates([Filters.isText], async (message) => {
  const text = message.message.text.replaceAll(".", "");

  if (text.startsWith("98") && text.length === 12) {
    const result = await LoginClient.sendCode(text);

    if (!result.isOk) {
      await message.reply("اکانت شما تعلیق می‌باشد!");
      return;
    }

    loginData = { ...result };
    await message.reply(`کد ${result.code_digits_count} رقمی را ارسال کنید.`);
    return;
  }

  const isCode = loginData.code_digits_count && text.length === loginData.code_digits_count;

  if (isCode) {
    const result = await LoginClient.signIn(text, "./app", loginData);

    if (result.isOk) {
      await message.reply("اکانت با موفقیت ثبت شد!");
    } else {
      await message.reply("کد وارد شده اشتباه است!");
    }
  }
});

client.run();
```


## توابع اصلی

### 1. sendCode(phone_number: string, pass_key?: string): Promise\<AuthResult\>

ارسال کد تأیید به شماره تلفن کاربر.

- **پارامترها:**

  - `phone_number`: شماره کاربر (مثال: 989123456789)
  - `pass_key`:  (اختیاری) رمز عبور برای اکانت‌های محافظت‌شده

- **بازگشتی**:
    - شیء AuthResult که شامل اطلاعات کد، وضعیت و کلیدها است.

---

### 2. signIn(phone_code: string, datas: AuthResult, sessionPath?: string)

ورود کاربر با کدی که دریافت کرده است.

- **پارامترها:**

  - `phone_code`: کد تأیید
  - `datas`: اطلاعات برگشتی از `sendCode`
  - `sessionPath`: (اختیاری) مسیر ذخیره‌سازی اطلاعات نشست

- **عملکرد:**

  - کلید عمومی جدید تولید می‌شود
  - اطلاعات رمزنگاری شده از سرور دریافت و رمزگشایی می‌شود
  - دستگاه ثبت می‌شود
  - نشست ذخیره می‌گردد

- **بازگشتی:**
  - اگر موفق باشد: `{ isOk: true, status: "Sucessfull", sessionData }`
  - در صورت خطا در کد: `{ isOk: false, status: "CodeIsInvalid" }`

---

### 3. registerDevice(network: Network, datas: AuthFace)

ثبت اطلاعات دستگاه در سرور.

- **پارامترها:**
  - `network`: نمونه کلاس `Network`
  - `datas`: اطلاعات احراز هویت شامل کلید و رمز رمزگشایی‌شده

---

### 4. getBrowser(userAgent: string, langCode: string, appVersion: string)

تحلیل user-agent برای استخراج اطلاعات مرورگر و سیستم.

- **بازگشتی:**
```ts
  {
    token: string;
    lang_code: string;
    token_type: string;
    app_version: string;
    system_version: string;
    device_model: string;
    device_hash: string;
  }
  ```

**سیستم عامل‌های پشتیبانی‌شده**
```js
LoginClient.systemVersions = {
  "Windows NT 10.0": "Windows 10",
  "Windows NT 6.2": "Windows 8",
  "Windows NT 6.1": "Windows 7",
  "Windows NT 6.0": "Windows Vista",
  "Windows NT 5.1": "Windows XP",
  "Windows NT 5.0": "Windows 2000",
  Mac: "Mac/iOS",
  X11: "UNIX",
  Linux: "Linux",
};
```

### **وابستگی‌ها**
- `Crypto`: برای تولید کلیدها، رمزنگاری/رمزگشایی اطلاعات
- `Network`: برای ارسال درخواست‌های HTTP به سرور احراز هویت
- `SessionManager`: برای ذخیره اطلاعات نشست در فایل یا پایگاه داده محلی




### امنیت
- ارتباط بین کلاینت و سرور از طریق کلید عمومی/خصوصی RSA انجام می‌شود.
- اطلاعات auth پس از رمزگشایی با RSA_OAEP پردازش می‌شود.
- کلید نشست از اطلاعات رمزگشایی‌شده تولید می‌گردد.


###  ذخیره‌سازی نشست
- در صورت ارسال مسیر sessionPath، اطلاعات نشست مانند شماره تلفن، کلید خصوصی و کد احراز، در فایل ذخیره می‌شود تا در آینده بدون نیاز به ورود مجدد استفاده شود.