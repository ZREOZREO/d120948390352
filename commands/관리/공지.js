const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");

module.exports = {
    name: '공지',
    execute(message) {
        message.delete()

        const announcement = message.content.slice(prefix.length + this.name.length + 1)
        const user = message.author
        const embed = new Discord.MessageEmbed()
        .setAuthor(`ANNOUNCE BY ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${message.guild.name} 의 공지사항`)
        .setDescription(`**${announcement}**`)
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
        .setAuthor(`ANNOUNCE BY ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`DM으로 공지를 보냈어요!`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const Embed4 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${user.tag} 공지를 사용할 권한이 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)


        if (message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("ADMINISTRATOR") || message.member.id == ownerid)
        {
            if(message.member != null)
            {
                message.member.guild.members.cache.array().forEach(userlist => {
                    if(userlist.user.bot) return;
                    try
                    {
                        userlist.user.send(embed)
                    }
                    catch(e)
                    {
                        message.channel.send(Embed2)
                        .then(msg => {setTimeout(() => msg.delete(), 3000)})
                    }
                    
                });
            }
            message.channel.send(Embed3)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
        else
        {
            message.channel.send(Embed4)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }

    }
}
