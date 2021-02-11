function randAns() {
    var rand = ['Natural 1', '2', '3', '4', '5', '6', '7', "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "Natural 20"];

    return rand[Math.floor(Math.random()*rand.length)];
}

const Discord = require('discord.js');

module.exports = {
    name: 'd20',
    description: 'Number from 1 to 10',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0384fc')
        .setTitle(randAns())
        .setFooter(`DnD Dice`)
        return message.channel.send(embed);
    },
};