const Discord = require('discord.js');
const chalk = require('chalk');
const { prefix, token } = require('./config.json');

const greenBright = chalk.greenBright;
const redBright = chalk.redBright;
const whiteBright = chalk.whiteBright;
const inverse = chalk.inverse;

const client = new Discord.Client();

client.once('ready', () => {
    console.log(greenBright(`${redBright('Deadpool')} is up and running!`));
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) {
        if (message.author.bot) return;

        return console.log(`${redBright(message.author.username)}: ${whiteBright(message.content)}`);
    }


    if (message.content === '!ping') {
        message.channel.send('I just shit in your kitty litter... ^_^');
    }
});

client.login(token);
