const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, token, color, errorcolor, owner, ownerwid, img, img2} = require("../../config.json");

module.exports = {
    name: "언밴",
    execute(message){
        message.delete()
        const user = message.author;
        const unbanuser = message.mentions.members.first(); 
        
        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`BANNED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${unbanuser.user.tag} IS UNBANNED IN ${message.guild.name}!`)
        .setDescription(`ID = ${unbanuser.user.id}`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
        
        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${unbanuser.user.tag}을 UNBAN 할 권한이 없습니다`)
        .setDescription(`ID = ${unbanuser}`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
        

        if (message.member.hasPermission("BAN_MEMBERS") || message.member.hasPermission("Administrator") || message.author.id === `${ownerid}`) 
        {
            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            unbanuser.unban
        } 
        else
        {
            message.channel.send(Embed2)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
}}
