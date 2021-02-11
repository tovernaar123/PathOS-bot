const Discord = require('discord.js');

module.exports = {
    name: 'helpf',
    description: 'Shows all fun commands',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle('Commands:')
        .addFields(
            { name: '8ball', value: 'Gives a random answer',  inline: false},
            { name: 'balls', value: 'Rates your balls',  inline: false},
            { name: 'clap', value: 'Clap? Clap!',  inline: false},
            { name: 'tort', value: 'Trick or Treat',  inline: false},
            )
        .setFooter(`help`)
        return message.channel.send(embed);
    },
};