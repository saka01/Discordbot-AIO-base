const { RichEmbed } = require("discord.js");
const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()


module.exports.run = async (bot, message, args) => {

    message.delete();
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some titled')

        .setAuthor('From: Chegg')
        .setDescription('Some description here')
        .setTimestamp()
        .setFooter('Thank you :))');

    message.channel.send(exampleEmbed);



}

module.exports.help = {
    name: "say"
}
