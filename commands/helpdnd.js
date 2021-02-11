const Discord = require('discord.js');

module.exports = {
    name: 'helpdnd',
    description: 'Shows all DnD commands',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle('Commands:')
        .addFields(
            { name: 'd4', value: 'Random number from 1 to 4',  inline: false},
            { name: 'd6', value: 'Random number from 1 to 6',  inline: false},
            { name: 'd8', value: 'Random number from 1 to 8',  inline: false},
            { name: 'd10', value: 'Random number from 1 to 10',  inline: false},
            { name: 'd12', value: 'Random number from 1 to 12',  inline: false},
            { name: 'd20', value: 'Random number from 1 to 20',  inline: false},
            { name: 'd', value: 'Random number from 1 to infinity and beyond!',  inline: false},
            )
        .setFooter(`help`)
        return message.channel.send(embed);
    },
};