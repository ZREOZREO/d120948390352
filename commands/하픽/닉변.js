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
    name: "닉변",
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

        try 
        {
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
            
            const playerUUIDFetch = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`); // fetch uuid 
            const playerUUIDData = await playerUUIDFetch.json(); 
            const playerNameHistory = await fetch(`https://api.mojang.com/user/profiles/${playerUUIDData.id}/names`); // fetch name history
            const playerNameData = await playerNameHistory.json();

            const Embed = new Discord.MessageEmbed()
            .setAuthor(`PLAYER INFO BY ${owner}`, img3)
            .setThumbnail(`https://crafatar.com/avatars/${playerUUIDData.id}?overlay&size=256`)
            .setTitle('Name History')
            .setDescription(`${playerNameData[playerNameData.length - 1].name}'s Name History`)
            .setDescription(`[${player.rank}] ${player.nickname}`)
            .addField('Rank:', `${playerRank}`, true)
            .addField('Level:', `${player.level}`, true)
            .addField('Karma:', `${commaNumber(player.karma)}`, true)
            .setImage(img4)
            .setFooter(`${owner}`, img3)
            .setTimestamp()
            .setColor(`${color}`)

            for(length in playerNameData) { // name dividers
                for(key in playerNameData[length]) {
                    if(key == 'name' && playerNameData[length].changedToAt == undefined) {
                        Embed.addField(playerNameData[length][key], '`Original Name`', true)
                    }
                }
            }

            for(length in playerNameData) { 
                for(key in playerNameData[length]) {
                    if(key == 'name') {
                        if(playerNameData[length].changedToAt == undefined) {
                            break;
                        } else {
                        const changedAtDate = new Date(playerNameData[length].changedToAt); // fetch first login date and time
                        const changedAt = changedAtDate.toLocaleString() // convert into cleaner date and time
                        Embed.addField(playerNameData[length][key], `${changedAt}`, true)
                        }
                    }
                }
            }

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
        } catch {
        }
    }
}