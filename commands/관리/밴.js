const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, token, color, errorcolor, owner, ownerwid, img, img2} = require("../../config.json");


module.exports = {
    name: "밴",
    execute(message){
        message.delete()
        const args = message.content.split(' ')
        const user = message.author;
        const banuser = message.mentions.members.first(); 
        const reason = args[4]
        
        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`BANNED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${banuser.user.tag} IS BANNED IN ${message.guild.name} BY ${message.author}!`)
        .setDescription(`**ID = ${banuser.id} \n REASON = ${reason}**`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)
        
        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${banuser.user.tag}을 BAN 할 권한이 없습니다`)
        .setDescription(`**ID = ${banuser.id} \n REASON = ${reason}**`)
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
        

        if(message.member.hasPermission("BAN_MEMBERS") || message.member.hasPermission("ADMINISTRATOR")) 
        {
            try 
            {
                banuser.send(Embed);
                setTimeout(function() { banuser.ban(); }, 3000);
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
