function randAns() {
    var rand = ['Natural 1', '2', '3', '4', '5', '6'];

    return rand[Math.floor(Math.random()*rand.length)];
}

const Discord = require('discord.js');

module.exports = {
    name: 'd6',
    description: 'Number from 1 to 6',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0384fc')
        .setTitle(randAns())
        .setFooter(`DnD Dice`)
        return message.channel.send(embed);
    },
};