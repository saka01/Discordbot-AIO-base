const { RichEmbed } = require("discord.js");
const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()


module.exports.run = async (bot, message, args) => {



    message.delete();

    var mg = await message.channel.send({embed:{
            color: 3447003,
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL()
            },
            title: "This is an embed",
            url: "http://google.com",
            description: "This is a test embed to showcase what they look like and what they can do.",
            fields: [{
                name: "Fields",
                value: "They can have different fields with small headlines."
            },
                {
                    name: "Masked links",
                    value: "You can put [masked links](http://google.com) inside of rich embeds."
                },
                {
                    name: "Markdown",
                    value: "You can put all the *usual* **__Markdown__** inside of them."
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL(),
                text: "© Example"
            }
        }
    });

    // mg.react('👌')


    const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === message.author.id;
    mg.awaitReactions(filter, { time: 15000, errors: ['time'] })
        .then(collected => console.log(`Collected ${collected.size} reactions`))
        .catch(console.error);




}

module.exports.help = {
    name: "react"
}
