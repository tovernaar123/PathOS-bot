function randAns(max) {
    let rand = Math.floor(Math.random() * Math.floor(max)) + 1;
    if(rand === 1){
      return "Natural 1" 
    }else if(rand === max - 1){
      return `Natural ${max+1}` 
    }
   return rand
  }

function randCol() {
    var randC = ['#314343', '#313149', '#292641', '#1e1031', '#0b0027'];

    return randC[Math.floor(Math.random()*randC.length)];
}

const Discord = require('discord.js');

module.exports = {
    name: 'd',
    description: 'Number from 1 to infinity and beyond',
    args: true,
    execute (message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor(randCol())
        .setTitle(randAns(args[0]))
        .setFooter(`DnD Dice`)
        return message.channel.send(embed);
    },
};