---
sidebar_position: 1
---

# Event Handlers - سیستم مدیریت ایونت‌ها

در این سیستم، می‌توان برای انواع مختلف بروزرسانی (update)ها، یک یا چند **هندلر (handler)** تعریف کرد. این هندلرها می‌توانند شامل **فیلتر** نیز باشند.

---

## ساختار کلی

```ts
private registerHandler<T>(
  this: Client,
  updateType: TypeUpdate,
  arg1: ((msg: T) => boolean)[] | ((msg: T) => void),
  arg2?: (msg: T) => void
): void
```

- updateType: نوع ایونت (مثلاً message_updates یا show_notifications)
- arg1:
  - اگر آرایه‌ای از توابع باشد: لیستی از فیلترها.
  - اگر تابع باشد: همان callback اصلی برای هندل کردن پیام.
- arg2: در صورت وجود فیلتر، این تابع callback نهایی خواهد بود.

## ثبت ایونت‌ها

### ایونت onMessageUpdates

```js
client.onMessageUpdates((msg) => {
  console.log(msg.text);
});
```

با فیلتر:

```js
client.onMessageUpdates([(msg) => msg.message?.text === "/start"], (msg) => {
  console.log("start command received");
});
```

---

### ایونت onChatUpdates

```js
client.onChatUpdates((msg) => {
  console.log("Chat updated", msg);
});
```

---

### ایونت onShowActivities

```js
client.onShowActivities((activity) => {
  console.log("User activity shown", activity);
});
```

---

### ایونت onShowNotifications

```js
client.onShowNotifications((notif) => {
  console.log("Notification received", notif);
});
```

---

### ایونت onEditMessages

```js
client.onEditMessages(obgect_guid, (editedMsg) => {
  console.log("Message edited:", editedMsg);
});
```

⚠️ توجه: onEditMessages یک هندلر ویژه است که از Extras.onEditMessages استفاده می‌کند.