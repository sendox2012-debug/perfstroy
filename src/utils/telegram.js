/**
 * Компактное кодирование данных для Telegram
 * Простой base64 без сжатия (для коротких строк это оптимально)
 */
export const encodeTelegramData = (data) => {
  try {
    // Оставляем только essential поля
    const compactData = {
      n: data.name || "",
      p: data.phone || "",
      e: data.email || "",
      s: data.serviceType || "",
      a: data.area || "",
      c: (data.comment || "").substring(0, 100),
      t: Date.now(),
    };

    // Компактный JSON без пробелов
    const json = JSON.stringify(compactData);

    // Простой base64 encoding
    const base64 = btoa(unescape(encodeURIComponent(json)));

    // URL-safe encoding
    const urlSafe = base64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    return urlSafe;
  } catch (error) {
    console.error("Ошибка кодирования:", error);
    return null;
  }
};

// Ссылка на бота
export const TELEGRAM_BOT_URL = "https://t.me/Perfstroybot";
