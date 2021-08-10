const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, token, color, errorcolor, owner, ownerid, img, img2, covidapi} = require("../../config.json");


module.exports = {
    name: "꺼져",
    execute(message){
        message.delete()
        const user = message.author;

        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`STOP by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`BOT IS STOPEED BY ${user.tag}`)
        .setDescription(`USER ID = ${message.author.id}`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`봇을 종료할 권한이 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        if (message.author.id === `${ownerid}`)
        {
            try
            {
                message.channel.send(Embed);
                setTimeout(function() { process.exit(); }, 3000);
            }
            catch(e)
            {
                error(e)
            }
        }
        else
        {
            message.channel.send(Embed2);
            user.send(Embed2);
        }
    }
}