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
    name: "티앤티",
    execute(message, args) {
        message.delete()

        const user = message.author
        const Embed3 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`특정 유저에게 메시지를 보낼 수 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)


        if(args[0] == null)
        {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`ERROR REPORTED by ${owner}`, img3)
            .setThumbnail(img3)
            .setTitle(`유저를 찾을 수 없습니다`)
            .setImage(img4)
            .setFooter(`${owner}`, img3)
            .setTimestamp()
            .setColor(`${errorcolor}`)
            
            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }

        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`HYPIXEL INFO BY ${owner}`, img3)
            .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/TNT-64.png')
            .setTitle('TNT Games Stats')
            .addField('Coins:', `${commaNumber(player.stats.tntgames.coins)}`, true)
            .addField('Total Wins:', `${commaNumber(player.stats.tntgames.wins)}`, true)
            .addField('Winstreak:', `${commaNumber(player.stats.tntgames.winstreak)}`, true)
            .addField('TNT Run Wins:', `${commaNumber(player.stats.tntgames.tntrun.wins)}`, true)
            .addField('TNT Run Deaths:', `${commaNumber(player.stats.tntgames.tntrun.deaths)}`, true)
            .addField('TNT Run Longest Game (Minutes):', `${Math.floor(player.stats.tntgames.tntrun.record / 60)}:${player.stats.tntgames.tntrun.record - Math.floor(player.stats.tntgames.tntrun.record / 60) * 60}`, true)
            .addField('PvP Run Wins:', `${commaNumber(player.stats.tntgames.pvprun.wins)}`, true)
            .addField('PvP Run Deaths:', `${commaNumber(player.stats.tntgames.pvprun.deaths)}`, true)
            .addField('PvP Run Longest Game (Minutes):', `${Math.floor(player.stats.tntgames.pvprun.record / 60)}:${player.stats.tntgames.pvprun.record - Math.floor(player.stats.tntgames.pvprun.record / 60) * 60}`, true)
            .addField('PvP Run Kills:', `${commaNumber(player.stats.tntgames.pvprun.kills)}`, true)
            .addField('PvP Run KD Ratio:', `${commaNumber(player.stats.tntgames.pvprun.KDRatio)}`, true)
            .addField('PvP Run Wins:', `${commaNumber(player.stats.tntgames.pvprun.wins)}`, true)
            .addField('TNT Tag Kills:', `${commaNumber(player.stats.tntgames.tnttag.kills)}`, true)
            .addField('TNT Tag Wins:', `${commaNumber(player.stats.tntgames.tnttag.wins)}`, true)
            .addField('TNT Tag Speed:', `${commaNumber(player.stats.tntgames.tnttag.speed)}`, true)
            .addField('Bow Spleef Wins:', `${commaNumber(player.stats.tntgames.bowspleef.wins)}`, true)
            .addField('Bow Spleef Tags:', `${commaNumber(player.stats.tntgames.bowspleef.tags)}`, true)
            .addField('Bow Spleef Deaths:', `${commaNumber(player.stats.tntgames.bowspleef.deaths)}`, true)
            .addField('Wizards Wins:', `${commaNumber(player.stats.tntgames.wizards.wins)}`, true)
            .addField('Wizards Kills:', `${commaNumber(player.stats.tntgames.wizards.kills)}`, true)
            .addField('Wizards Deaths:', `${commaNumber(player.stats.tntgames.wizards.deaths)}`, true)
            .addField('Wizards Assists:', `${commaNumber(player.stats.tntgames.wizards.wins)}`, true)
            .addField('Wizards KD Ratio:', `${commaNumber(player.stats.tntgames.wizards.KDRatio)}`, true)
            .addField('Wizards Points:', `${commaNumber(player.stats.tntgames.wizards.points)}`, true)
            .addField('Wizards Class:', `${wizardsClass}`, true)
            .setImage(img4)
            .setFooter(`${owner}`, img3)
            .setTimestamp()
            .setColor(`${color}`)

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
        }).catch(e => {
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                const Embed = new Discord.MessageEmbed()
                .setAuthor(`ERROR REPORTED by ${owner}`, img3)
                .setThumbnail(img3)
                .setTitle(`유저를 찾을 수 없습니다`)
                .setImage(img4)
                .setFooter(`${owner}`, img3)
                .setTimestamp()
                .setColor(`${errorcolor}`)
    
                message.channel.send(Embed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }     
        });
    }
}