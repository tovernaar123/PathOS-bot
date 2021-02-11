const Discord = require('discord.js');

module.exports = {
    name: 'args-info',
    description: 'Info about the arguments',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`Argument Length: ${args.length}`)
        .setDescription(`Arguments: ${args}`)
        .setFooter(`args-info`)
        return message.channel.send(embed);
    },
};