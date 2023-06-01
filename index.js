
const telegramURL = document.getElementById('telegram');
const discordURL = document.getElementById('discord');
const whatsappURL = document.getElementById('whatsapp');

telegramURL.addEventListener('click', () => {
    openSesami("https://web.telegram.org")
});

discordURL.addEventListener('click', () => {
    openSesami("https://discord.com")
});

whatsappURL.addEventListener('click', () => {
    openSesami("https://web.whatsapp.com/")
});


////////////////////////////////////////////////////////////////
// a new Style of calling ipcrenderer, defined at contextBridge
////////////////////////////////////////////////////////////////

function openSesami(targetURL){
  myapi.send('redirect-new', targetURL);
}
