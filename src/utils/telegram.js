export const encodeTelegramData = async (data) => {
  try {
    // 1. Преобразуем объект в JSON строку
    const json = JSON.stringify(data);

    // 2. Сжимаем через встроенный Compression Streams API
    const stream = new Blob([json]).stream();
    const compressedStream = stream.pipeThrough(new CompressionStream("gzip"));
    const compressedBlob = await new Response(compressedStream).blob();
    const compressedBuffer = await compressedBlob.arrayBuffer();

    // 3. Кодируем в base64
    const bytes = new Uint8Array(compressedBuffer);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64 = btoa(binary);

    // 4. Делаем URL-safe
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

// Ссылка на бота (замени на своего)
export const TELEGRAM_BOT_URL = "https://t.me/Perfstroybot";
