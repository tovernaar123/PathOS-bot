module.exports = {
    name: 'ping',
    description: 'Ping commands',
    execute(message, args) {
        message.channel.send('Pong!')

        if(args[0]=== 'info'){
            return message.channel.send('This command shows you the reaction speed')
        }
    },
};