const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, covidapi} = require("../config.json");
const fs = require('fs');
const fetch = require('node-fetch');
const mongoose = require('../DB/mongoose');

module.exports= {
    name: 'message',
    execute(message, client) {
        const user = message.author
        if (message.author.bot) return;
        
        const Embed = new Discord.MessageEmbed()
        .setAuthor(`DEVELOPED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`안녕하세요 ${owner} BOT 입니다!`)
        .setDescription(`자세한 명령어는 **${prefix}명령어** 를 사용해주세요!`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
    
        const Embed3 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`특정 유저에게 메시지를 보낼 수 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)
    
    
        if (message.content === `${basic}`)
        {
            message.delete()
            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            try
            {
                user.send(Embed)
            }
            catch(e)
            {
                message.channel.send(Embed3)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
        }

        // if(message.content.includes("discord.gg"))
        // {
    
        //     if(message.guild.me.hasPermission("MANAGE_MESSAGES") || message.guild.me.hasPermission("ADMINISTRATOR"))
        //     {
        //         message.delete()
        //     }
    
        //     const Embed = new Discord.MessageEmbed()
        //     .setAuthor(`DISCORD LINK DETECTED by ${owner}`, img)
        //     .setThumbnail(img)
        //     .setTitle(`DISCORD LINK DETECTED!`)
        //     .setDescription(`MESSAGE = ${message.content}`)
        //     .setFooter(`${owner}`, img)
        //     .setTimestamp()
        //     .setColor(`${color}`)
    
        //     message.channel.send(Embed)
        //     .then(msg => {setTimeout(() => msg.delete(), 3000)})
            
        // }

        // if(message.content.startsWith(basic))
        // {
        //     try
        //     {
        //         const filePath = `./DB/CHAT/LOG.txt`;
        //         const date = new Date()
        //         var format1 = 'YYYY년 MM월 DD일 HH시 mm분';
        
        //         console.log(`명령어 | ${moment(date).format(format1)} | 서버: ${message.guild.name} | 채널: ${message.channel.name} | \r\n유저: ${message.author.tag} | 메시지: ${message.content} \r\n`)
        //         const log = `명령어 | ${moment(date).format(format1)} | 서버: ${message.guild.name} | 채널: ${message.channel.name} | 유저: ${message.author.tag} | 메시지: ${message.content}`
            
        //         fs.open(filePath, 'a', function(){});
        //         fs.appendFile(filePath, log, function(){});
        //     }
        //     catch(e)
        //     {
        //         return;
        //     }
        // }
    }
}