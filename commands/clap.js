const Discord = require('discord.js');

module.exports = {
    name: 'clap',
    description: 'clap',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle('👏')
        .setFooter(`Clap`)
        return message.channel.send(embed);
    },
};