function randAns() {
    var randT = ['Watch out! ', 'Oh no!'];

    return randT[Math.floor(Math.random()*randT.length)];
}

function randCol() {
    var randC = ['#ff6f00', '#000000', '#0b400b', '#7a0006', '#330769'];

    return randC[Math.floor(Math.random()*randC.length)];
}

function randMon() {
    var randM = ['A piece of rock fell. Roll 10 for dexterity to jump out of the way.', 'A swarm of batt attacks. Roll 14 for dexterity to jump out of the way.', 'A stalacmite fell over on you. Roll 14 for strength to push it off.', 'A poison gas geyser blasted you. Roll 14 for consitution to hold your breath.', 'An orc smashed through the wall. Fight it with your party', 'A stalactite is falling. Roll 14 for dexterity to jump out of the way'];

    return randM[Math.floor(Math.random()*randM.length)];
}


const Discord = require('discord.js');

module.exports = {
    name: 'cave',
    description: 'Roll for initiative',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor(randCol())
        .setTitle(randAns() + randMon())
        .setFooter(`*Insert spoopy cave`)
        return message.channel.send(embed);
    },
};