const Discord = require('discord.js');
const bot = new Discord.Client();
const { prefix, token } = require("./config.json");
const fs = require("fs");
bot.commands = new Discord.Collection();





fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("No commands were found...")
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${f} loaded!`)
        bot.commands.set(props.help.name, props);
    })})


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("me get developed :)", { type: "WATCHING" });
});



bot.on('guildMemberAdd', guildMember => {
    guildMember.roles.add(
        guildMember.guild.roles.cache.find(role => role.name === 'Snipers')
    );
});

bot.on("message", message => {
    if(message.channel.id !== 764958520969658388) return;


   if (message.attachments.size > 0){

       message.channel.send({embed: {
               color: 3447003,
               author: {
                   icon_url: bot.user.avatarURL()
               },
               fields: [{
                   name: "YOOOOOOOOOO",
                   value: "This dude copppedd!!!!!"
               },
                   {
                       name: "Rate it?",
                       value: "Good Chef or Nah"
                   },
                   {
                       name: "Dont like it?",
                       value: "react with this"
                   }
               ],
               timestamp: new Date(),
               footer: {
                   icon_url: bot.user.avatarURL(),
                   text: "©TheRealSniper"
               }
           }
       });
   }
});




bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '!';
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);


});


















bot.login(token);
