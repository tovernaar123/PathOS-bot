function randAns() {
    var rand = ['Yes', 'No', 'Maybe', 'Definitely', 'Definitely not', 'Never', 'Of course', "I'm not sure", "I don't know"];

    return rand[Math.floor(Math.random()*rand.length)];
}

const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    description: 'Random answer',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0384fc')
        .setTitle(randAns())
        .setFooter(`8ball`)
        return message.channel.send(embed);
    },
};