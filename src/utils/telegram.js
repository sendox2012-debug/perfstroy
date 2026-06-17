const SERVICE_CODES = {
  Кровля: "krov",
  Фасад: "fas",
  Замена: "zam",
  "Под ключ": "key",
  Пристройка: "prist",
  Веранда: "ver",
  Терраса: "terr",
  Беседка: "bes",
  "Кровельные работы": "krov",
  "Фасадные работы": "fas",
  "Замена покрытия": "zam",
  "Кровля под ключ": "key",
};

function stringToHex(str) {
  const utf8 = unescape(encodeURIComponent(str));
  let hex = "";
  for (let i = 0; i < utf8.length; i++) {
    hex += utf8.charCodeAt(i).toString(16).padStart(2, "0");
  }
  return hex;
}

export const createOrderLink = (data) => {
  try {
    const name = (data.name || "").substring(0, 6).trim();
    const phone = (data.phone || "")
      .replace(/[\s\-\+\(\)]/g, "")
      .substring(0, 11);
    const service = SERVICE_CODES[data.serviceType] || "other";

    const dataString = `${name}|${phone}|${service}`;
    const hexData = stringToHex(dataString);

    console.log("Строка:", dataString);
    console.log("HEX:", hexData);
    console.log("Длина:", hexData.length);

    if (hexData.length > 64) {
      console.error("Превышен лимит:", hexData.length);
      return null;
    }

    const botUsername = "Perfstroybot";
    return `https://t.me/${botUsername}?start=${hexData}`;
  } catch (error) {
    console.error("Ошибка:", error);
    return null;
  }
};

export const TELEGRAM_BOT_URL = "https://t.me/Perfstroybot";
