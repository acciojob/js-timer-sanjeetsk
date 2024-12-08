// write js code here if required
const para = document.getElementById('timer');

const date = new Date();
const day = String(date.getDate()).padStart(2,"0");
const month = String(date.getMonth()+1).padStart(2, "0");
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

para.innerHTML = `${day}/${month}/${year}, ${hour}:${minute}:${second}`
