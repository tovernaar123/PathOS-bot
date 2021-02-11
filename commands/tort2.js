function randAns() {
    var randT = ['Trick! You tricked ', 'Treat! You treated '];

    return randT[Math.floor(Math.random()*randT.length)];
}

function randCol() {
    var randC = ['#ff6f00', '#000000', '#0b400b', '#7a0006', '#330769'];

    return randC[Math.floor(Math.random()*randC.length)];
}

let config = [
    {url:"https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c3/Zombie.png/revision/latest/scale-to-width-down/163?cb=20191227070025",name:"a Zombie"},
]


const Discord = require('discord.js');

module.exports = {
    name: 'tort2',
    description: 'Trick or Treat!',
    args: true,
    execute (message, args) {
        let charter = config[Math.floor(Math.random() * config.length)]
        const embed = new Discord.MessageEmbed()
        .setColor(randCol())
        .setTitle(randAns() + charter.name)
        .setImage(charter.url)
        .setFooter(`Trick or Treat!`)
        return message.channel.send(embed);
    },
};