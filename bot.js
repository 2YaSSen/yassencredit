const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("544248666718863361")
setInterval(function() {
channel.send(`544248666718863361544248666718863361544248666718863361544248666718863361`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
