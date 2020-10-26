const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send(`🏓 Pinging....`);

    msg.edit(`🏓 Pong!
        Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
        API Latency is ${Math.round(bot.ping)}ms`);

    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${bot.ping}ms`);
}


module.exports.help = {
    name: "ping"
}
