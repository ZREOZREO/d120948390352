const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");

module.exports = {
    name: '역할생성',
    execute(message){
        message.delete()

        const args = message.content.split(' ')
        const name = args[2];
        const rolecolor = args[3];
        const user = message.author

        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`ROLE CREATED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${name} IS CREATED BY ${message.author.tag}!`)
        .setDescription(`**ROLE COLOR = ${rolecolor}**`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
        
        const Embed2 = new Discord.MessageEmbed()   
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${name} 역할을 생성할 권한이 없습니다`)
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
        .setAuthor(`ROLE CREATED by ${owner}`, img)
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
            message.guild.roles.create({
            data: {
                name: name,
                color: rolecolor,
                mentionable: false,
            }
            })
        }
        else
        {
            message.channel.send(Embed2)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }



    }
}