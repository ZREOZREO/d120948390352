const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, token, color, errorcolor, owner, ownerid, img, img2, covidapi} = require("../../config.json");

module.exports = {
    name : "유저정보",
    execute(message){
        message.delete()

        const user = message.author

        let target = message.mentions.members.first() || message.guild.member(message.author)
        let createdAt = target.user.createdAt
        let joinedAt = target.user.joinedAt

        if(!target)
        {
            target = message.author()
        }

        const Embed2 = new Discord.MessageEmbed()
        .setAuthor(`USER INFO by ${owner}`, img)
        .setThumbnail(target.user.displayAvatarURL({ dynamic: true, size: 512}))
        .setTitle(`${target.user.tag}'s INFO`)
        .addField("아이디", target.user.id)
        .addField("계정생성일", `${createdAt.getFullYear()}년 ${createdAt.getMonth()}월 ${createdAt.getDay()}일 ${createdAt.getHours()}시 ${createdAt.getMinutes()}분 ${createdAt.getSeconds()}초`)
        .addField('서버접속일', `${joinedAt}`)
        .addField('봇', `${target.user.bot}`)
        .addField('역할', target.roles.highest,)
        .addField('역할색깔', target.roles.color || '`None`')
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const Embed4 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`특정 유저에게 메시지를 보낼 수 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        const Embed5 = new Discord.MessageEmbed()
        .setAuthor(`USER INFO BY ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`DM으로 유저정보를 보내드렸어요!`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
        
        try
        {
            user.send(Embed2)
            message.channel.send(Embed5)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            message.channel.send(Embed2)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
        catch(e)
        {
            message.channel.send(Embed4)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            console.error(e)
        }

    }
}