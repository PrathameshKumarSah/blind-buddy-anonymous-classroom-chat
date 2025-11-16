import axios from "axios";
import FormData from "form-data";
import base64ToBuffer from "../base64-to-buffer.js";

export async function sendAndStoreImage(base64Image, chatId) {
  // Step 1: Upload to Telegram
  const fileId = await uploadToTelegram(base64Image, chatId);

  // Step 2: Get public URL
  const imageUrl = await getTelegramFileUrl(fileId);

  return imageUrl; // store this in your DB
}


async function uploadToTelegram(imageBase64, chatId) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  const form = new FormData();
  const imageBuffer = base64ToBuffer(imageBase64);

  form.append("chat_id", chatId);
  form.append("photo", imageBuffer, { filename: "image.png" });

  const res = await axios.post(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
    form,
    { headers: form.getHeaders() }
  );

  // Telegram returns file_id
  const fileId = res.data.result.photo.pop().file_id;
  return fileId;
}

async function getTelegramFileUrl(fileId) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  const res = await axios.get(
    `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`
  );

  const filePath = res.data.result.file_path;

  // Final public file URL
  return `https://api.telegram.org/file/bot${BOT_TOKEN}/${filePath}`;
}
