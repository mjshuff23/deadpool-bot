const Discord = require('discord.js');
const chalk = require('chalk');


const client = new Discord.Client();
const greenBright = chalk.greenBright;
const redBright = chalk.redBright;

client.once('ready', () => {
    console.log(greenBright(`${redBright('Deadpool')} is up and running!`));
});

client.on('message', message => {
    console.log(message.content);
});

client.login('NzgwMzA5NTgyMzkxOTM1MDA2.X7tN7Q.No7ObcgR3OxNIubqtI2rwuHJJyI');
