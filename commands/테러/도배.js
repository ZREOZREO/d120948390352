const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, token, color, errorcolor, owner, ownerid, img, img2, covidapi} = require("../../config.json");

module.exports = {
    name: '도배',
    execute(message) {
        message.delete()

        var args = message.content.split(' ');
        const user = message.author;
        const repeat = `${args[2]}`
        const spam = message.content.slice(prefix.length + this.name.length + 1 + repeat.length + 1);
 
        const Embed = new Discord.MessageEmbed()
        .setAuthor(`SPAM STARTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`SPAM MESSAGE = ${spam}`)
        .setDescription(`**SPAM CHANNEL ID = ${message.channel.id}**`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const Embed2 = new Discord.MessageEmbed()
        .setAuthor(`SPAM STOPPED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`SPAM MESSAGE = ${spam}`)
        .setDescription(`**SPAM CHANNEL ID = ${message.channel.id}**`)
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

        const Embed4 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${user.tag} 도배를 사용할 권한이 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        if (message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("ADMINISTRATOR") || message.member.id == `${ownerid}`) 
        {
            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})

            try
            {
                if(message.author.id == owner.id)
                {
                    message.channel.send(Embed)
                }
                else
                {
                    user.send(Embed)
                }
            }
            catch(e)
            {
                message.channel.send(Embed3)
                .then(msg => {setTimeout(() => msg.delete(), 3000)}) 
            }

            for(i = 1; i <= args[2]; i ++)
            {
                message.channel.send(spam);
                if(i == args[2])
                {
                    message.channel.send(Embed2)
                    .then(msg => {setTimeout(() => msg.delete(), 3000)}) 
                    try
                    {
                        if(message.author.id == owner.id)
                        {
                            message.channel.send(Embed2)
                        }
                        else
                        {
                            user.send(Embed2)
                        }
                    }
                    catch(e)
                    {
                        message.channel.send(Embed3)
                        .then(msg => {setTimeout(() => msg.delete(), 3000)}) 
                    }
                }
            }
        }
        else
        {
            message.channel.send(Embed4)
            .then(msg => {setTimeout(() => msg.delete(), 3000)}) 
        }

    }
}