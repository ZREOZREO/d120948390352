const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, token, color, errorcolor, owner, ownerid, img, img2, covidapi} = require("../../config.json");


module.exports = {
    name: "킥",
    execute(message){
        message.delete()
        const args = message.content.split(' ')
        const reason = args[4]
        const kickuser = message.mentions.members.first()
        const kickuserlength = message.mentions.members.first.length
        const user = message.author
        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`KICKED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${kickuser.user.tag} IS KICKED IN ${message.guild.name} BY ${message.author}!`)
        .setDescription(`**ID = ${kickuser.id} \n REASON = ${reason}**`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
        
        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${kickuser.user.tag}을 KICK 할 권한이 없습니다`)
        .setDescription(`**ID = ${kickuser.id} \n REASON = ${reason}**`)
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
        

        if (message.member.hasPermission("KICK_MEMBERS") || message.member.hasPermission("ADMINISTRATOR")) 
        {
            try 
            {
                kickuser.send(Embed);
                setTimeout(function() { kickuser.kick(); }, 3000);
                message.channel.send(Embed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e) 
            {
                message.channel.send(Embed3)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
        }
        else
        {
            message.channel.send(Embed2)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
    }
}


