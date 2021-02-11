const Discord = require('discord.js');

module.exports = {
    name: 'helpu',
    description: 'Shows all utility commands',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle('Commands:')
        .addFields(
            { name: 'help', value: 'Shows all commands',  inline: false},
            { name: 'args-info', value: 'Counts words in message',  inline: false},
            { name: 'ping', value: 'Test response speed',  inline: false},
        )
        .setFooter(`help`)
        return message.channel.send(embed);
    },
};