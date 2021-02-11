var randomColor = Math.floor(Math.random()*16777215).toString(16);
const Discord = require('discord.js');

module.exports = {
    name: 'balls',
    description: 'Ball rating from 1-100',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle(Math.floor(Math.random() * 101) + `/100`)
        .setFooter(`ball rating`)
        return message.channel.send(embed);
    },
};