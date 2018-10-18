const Discord = require('discord.js');
const client = new Discord.Client();
console.log("ESMAEL_BOT");


client.on("ready", () => {
let channel =     client.channels.get("489141755258601490")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
