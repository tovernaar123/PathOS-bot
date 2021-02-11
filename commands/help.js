const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows all commands',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle('Commands:')
        .addFields(
            { name: 'helpu', value: 'Utility',  inline: true},
            { name: 'helpf', value: 'Fun',  inline: true},
            { name: 'helpdnd', value: 'DnD',  inline: true},
        )
        .setFooter(`help`)
        return message.channel.send(embed);
    },
};