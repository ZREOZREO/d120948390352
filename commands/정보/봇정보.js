const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");

const moment = require('moment');
const os = require('os')

module.exports = {
    name: "봇정보",
    execute(message) {
        message.delete()

        const user = message.author

        const Embed = new Discord.MessageEmbed()
        .setAuthor(`BOT INFO BY ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`BOT INFO`)
        .addField('램 사용량', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField('가동시간', `${client.uptime}`, true)
        .addField('Discord.js 버전', `v${Discord.version}`, true)
        .addField('Node.js 버전', `${process.version}`, true)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`특정 유저에게 메시지를 보낼 수 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        const Embed3 = new Discord.MessageEmbed()
        .setAuthor(`BOT INFO BY ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`DM으로 봇정보를 보내드렸어요!`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        try
        {
            user.send(Embed)
        }
        catch(e)
        {
            message.channel.send(Embed2)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
        message.channel.send(Embed3)
        .then(msg => {setTimeout(() => msg.delete(), 3000)})
        message.channel.send(Embed)
        .then(msg => {setTimeout(() => msg.delete(), 3000)})



    }
}