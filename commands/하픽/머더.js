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
    name: "머더",
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
            .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/MurderMystery-64.png')
            .setTitle('Murder Mystery Stats')
            .addField('Coins:', `${commaNumber(player.stats.murdermystery.coins)}`, true)
            .addField('Wins:', `${commaNumber(player.stats.murdermystery.wins)}`, true)
            .addField('Total Games:', `${commaNumber(player.stats.murdermystery.playedGames)}`, true)
            .addField('Kills:', `${commaNumber(player.stats.murdermystery.kills)}`, true)
            .addField('Deaths:', `${commaNumber(player.stats.murdermystery.deaths)}`, true)
            .addField('Wins As Murderer:', `${commaNumber(player.stats.murdermystery.winsAsMurderer)}`, true)
            .addField('Wins As Detective:', `${commaNumber(player.stats.murdermystery.winsAsDetective)}`, true)
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