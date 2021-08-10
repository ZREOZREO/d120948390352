const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");

module.exports = {
    name: '뮤트',
    execute(message){
        const member = message.mentions.members.first();
        const args = message.content.split(' ')
        const reason = args[3]
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'Muted')

        if(!role) {
            try {
                let muterole = message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
            } catch (error) {
                console.log(error)
            }
        };

        const muterole = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'Muted')

        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`MUTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${member.user.tag} IS MUTED IN ${message.guild.name} BY ${message.author.tag}!`)
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
            
            try
            {
                member.send(Embed)
            }
            catch(e)
            {
                message.channel.send(Embed3)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            member.roles.add(muterole)
        }
        else
        {
            message.channel.send(Embed3)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
    }
}