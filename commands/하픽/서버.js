const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");
const fs = require('fs');
const fetch = require('node-fetch');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(hpapikey);
const commaNumber = require('comma-number');
client.aliases = new Discord.Collection()

module.exports = {
    name: '서버',
    async execute(message, args){
        message.delete()

        const user = message.author
        const Embed3 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`특정 유저에게 메시지를 보낼 수 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        // try {
            if(args[0] == null)
            {
                const Embed = new Discord.MessageEmbed()
                .setAuthor(`ERROR REPORTED by ${owner}`, img3)
                .setThumbnail(img3)
                .setTitle(`SERVER를 찾을 수 없습니다`)
                .setImage(img4)
                .setFooter(`${owner}`, img3)
                .setTimestamp()
                .setColor(`${errorcolor}`)
                
                message.channel.send(Embed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
        const MOTDFetch = await fetch(`https://api.mcsrvstat.us/2/${args[0]}`);
        const MOTDData = await MOTDFetch.json();
        const serverFetch = await fetch(`https://mc-api.net/v3/server/ping/${args[0]}`)
        const serverData = await serverFetch.json();

        const embed = new Discord.MessageEmbed()
        .setAuthor(`SERVER INFO BY ${owner}`, img3)
        .setThumbnail(serverData.favicon)
        .setTitle(args[0])
        .addField('Host Name', `\`${MOTDData.hostname}\``)
        .addField('IP Address', `\`${MOTDData.ip}\`:\`${MOTDData.port}\``)
        .addField('Version', `\`${serverData.version.name}\``)
        .addField('Online Players', `\`${serverData.players.online}\`/\`${serverData.players.max}\``)
        .setImage(img4)
        .setFooter(`${owner}`, img3)
        .setTimestamp()
        .setColor(`${color}`)



        if (MOTDData.motd.clean[1] !== undefined) {
            const cleanMOTD = `\n ${MOTDData.motd.clean[1]}`
            embed.addField('Clean MOTD', `\`${MOTDData.motd.clean[0]}${cleanMOTD}\``)
        } else if (MOTDData.motd.clean[1] == undefined) {
            embed.addField('Clean MOTD', `\`${MOTDData.motd.clean[0]}\``)
        }

        if (MOTDData.motd.raw[1] !== undefined) {
            const rawMOTD = `\n ${MOTDData.motd.raw[1]}`
            embed.addField('Raw MOTD', `\`${MOTDData.motd.raw[0]}${rawMOTD}\``)
        } else if (MOTDData.motd.clean[1] == undefined) {
            embed.addField('Raw MOTD', `\`${MOTDData.motd.raw[0]}\``)
        }
        message.channel.send(embed)
        

  }
}