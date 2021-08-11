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
        
        try
        {
            if(message.guild.id == '815166438020349962')
            {
                return;
            }
        }
        catch(error)
        {
            return
        }

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
    }
}