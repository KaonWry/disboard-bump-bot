const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require('dotenv').config();



client.on("ready", () => {
	console.log(client.user.tag +  " logged in.");
});


client.on("message", msg => {
	if (msg.content === "help") {
		msg.reply("shut up");
	}

	if (msg.content === "test") {
		setInterval(function() {
    		msg.channel.send("Poggers");
    		console.log("pogger")
		}, 10000);
	}
})


client.login(process.env.TOKEN);