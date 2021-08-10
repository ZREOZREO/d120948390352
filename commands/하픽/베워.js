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
    name: "베워",
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
            .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
            .setTitle('BedWars Stats')
            .addField('Level', `${player.stats.bedwars.level}✫`, true)
            .addField('KD Ratio:', `${player.stats.bedwars.KDRatio}`, true)
            .addField('Final KD Ratio:', `${player.stats.bedwars.finalKDRatio}`, true)
            .addField('WL Ratio:', `${player.stats.bedwars.WLRatio}`, true)
            .addField('Bed Breaks:', `${commaNumber(player.stats.bedwars.beds.broken)}`, true)
            .addField('Beds Lost:', `${commaNumber(player.stats.bedwars.beds.lost)}`, true)
            .addField('Bed BL Ratio:', `${player.stats.bedwars.beds.BLRatio}`, true)
            .addField('Coins:', `${commaNumber(player.stats.bedwars.coins)}`, true)
            .addField('Total Deaths:', `${commaNumber(player.stats.bedwars.deaths)}`, true)
            .addField('Final Deaths:', `${commaNumber(player.stats.bedwars.finalDeaths)}`, true)
            .addField('Total Kills:', `${commaNumber(player.stats.bedwars.kills)}`, true)
            .addField('Total Final Kills:', `${commaNumber(player.stats.bedwars.finalKills)}`, true)
            .addField('Winstreak:', `${commaNumber(player.stats.bedwars.winstreak)}`, true)
            .addField('Total Wins:', `${commaNumber(player.stats.bedwars.wins)}`, true)
            .addField('Iron Collected:', `${commaNumber(player.stats.bedwars.collectedItemsTotal.iron)}`, true)
            .addField('Gold Collected:', `${commaNumber(player.stats.bedwars.collectedItemsTotal.gold)}`, true)
            .addField('Diamonds Collected:', `${commaNumber(player.stats.bedwars.collectedItemsTotal.diamond)}`, true)
            .addField('Emeralds Collected:', `${commaNumber(player.stats.bedwars.collectedItemsTotal.emerald)}`, true)
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