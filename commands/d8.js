function randAns() {
    var rand = ['Natural 1', '2', '3', '4', '5', '6', '7', "8"];

    return rand[Math.floor(Math.random()*rand.length)];
}

const Discord = require('discord.js');

module.exports = {
    name: 'd8',
    description: 'Number from 1 to 8',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0384fc')
        .setTitle(randAns())
        .setFooter(`DnD Dice`)
        return message.channel.send(embed);
    },
};