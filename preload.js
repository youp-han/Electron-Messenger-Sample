const {ipcRenderer  } = require('electron');


// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

  document.getElementById('telegram').addEventListener('click', function() {openSesami("https://web.telegram.org")});
  document.getElementById('discord').addEventListener('click', function() {openSesami("https://discord.com")});
  document.getElementById('whatsapp').addEventListener('click', function() {openSesami("https://web.whatsapp.com/")});

})

function openSesami(targetURL){
  ipcRenderer.send('redirect', targetURL );
}
