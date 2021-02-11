function randAns() {
    var rand = ['Natural 1', '2', '3', '4', '5', '6', '7', "8", "9", "10"];

    return rand[Math.floor(Math.random()*rand.length)];
}

const Discord = require('discord.js');

module.exports = {
    name: 'd10',
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