const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");

module.exports = {
    name: '언뮤트',
    execute(message){
        const member = message.mentions.members.first();
        const muterole = message.guild.roles.cache.find((role) => role.name === '뮤트');
        const args = message.content.split(' ')
        const reason = args[3]

        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`UNMUTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${member.user.tag} IS MUTED IN ${message.guild.name}!`)
        .setDescription(`**ID = ${member.id} \n REASON = ${reason}**`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
        
        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${member.user.tag}을 MUTE 할 권한이 없습니다`)
        .setDescription(`**ID = ${member.id} \n REASON = ${reason}**`)
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

        if(message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("ADMINISTRATOR"))
        {
            member.roles.remove(muterole)
            try
            {
                member.send(Embed)
            }
            catch(e)
            {
                message.channel.send(Embed3)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            member.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
        else
        {
            message.channel.send(Embed3)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
    }
}