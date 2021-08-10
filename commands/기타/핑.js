const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, token, color, errorcolor, owner, ownerid, img, img2, covidapi} = require("../../config.json");

module.exports = {
    name: "핑",
    execute(message){
        message.delete()
        const botping = Date.now() - message.createdTimestamp;

        const Embed = new Discord.MessageEmbed()
        .setAuthor(`PING BY ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`PING = ${botping} ms`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
        
        message.channel.send(Embed)
        .then(msg => {setTimeout(() => msg.delete(), 3000)})
    }
}
