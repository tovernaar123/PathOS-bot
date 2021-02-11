require('dotenv').config()

const Discord = require('discord.js');
const fs = require('fs');
const config = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const {
    prefix,
    token,
} = require('./config.json');
client.on("ready", () =>{
    console.log(`PathOS is running`);
});

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    try{
        command.execute(message, args);   
    }catch(error){
        console.error(error);
        message.reply('There was an issue executing that command.');
    }
});

client.login(process.env.BOT_ID_TOKEN);
