const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");

module.exports = {
    name: "역할삭제",
    execute(message){
        message.delete()

        var member = message.mentions.members.first();
        var role = message.mentions.roles.first();
        const user = message.author

        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`ROLE DELETED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${role.name} IS DELETED BY ${message.author.tag}!`)
        .setDescription(`**ROLE ID = ${role.id}**`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
        
        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${role.name} 역할을 삭제할 권한이 없습니다`)
        .setDescription(`**ID = ${user.id}**`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        const Embed3 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`특정 유저에게 메시지를 보낼 수 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        const Embed4 = new Discord.MessageEmbed()
        .setAuthor(`ROLE DELETED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`DM으로 변경기록을 보내드렸어요!`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        if (message.member.hasPermission("MANAGE_ROLES") || message.member.hasPermission("ADMINISTRATOR"))
        {
            try
            {
                user.send(Embed)
            }
            catch(e)
            {
                message.channel.send(Embed3)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            message.channel.send(Embed4)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})

            role.delete()
        }
        else
        {
            message.channel.send(Embed2)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
    }
}