// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

  document.getElementById('telegram').addEventListener('click', redirect1);
  document.getElementById('discord').addEventListener('click', redirect2);

})

function redirect1(){

  window.location.href="https://web.telegram.org";
}
function redirect2(){

  window.location.href="https://discord.com";
}

