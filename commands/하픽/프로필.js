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
    name: "프로필",
    async execute(message, args) {
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

        hypixelAPIReborn.getPlayer(args[0], { guild: true }).then(async (player) => {
            const playerUUID = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`);
            const playerUUIDData = await playerUUID.json();

            playerIsOnline = "";

            if (!player.isOnline) {
                playerIsOnline = "Offline"
            }

            if (player.isOnline) {
                playerIsOnline = "Online"
            }

            playerMinecraftVersion = "";

            if (player.mcVersion == null) {
                playerMinecraftVersion = "Unknown";
            }

            if (player.mcVersion != null) {
                playerMinecraftVersion = player.mcVersion;
            }

            playerRank = "";

            if (player.rank == 'Default') {
                playerRank = "None";
            }

            if (player.rank != 'Default') {
                playerRank = player.rank;
            }

            const firstLDate = new Date(player.firstLogin); // fetch first login date and time
            const lastLDate = new Date(player.lastLogin); // fetch last login date and time

            const firstL = firstLDate.toLocaleString() // convert into cleaner date and time
            const lastL = lastLDate.toLocaleString() // convert into cleaner date and time

            const playerInfoEmbed = new Discord.MessageEmbed()
            .setAuthor(`PLAYER INFO BY ${owner}`, img3)
            .setThumbnail(`https://crafatar.com/avatars/${playerUUIDData.id}?overlay&size=256`)
            .setTitle('Player Stats')
            .setDescription(`[${player.rank}] ${player.nickname}`)
            .addField('Rank:', `${playerRank}`, true)
            .addField('Level:', `${player.level}`, true)
            .addField('Karma:', `${commaNumber(player.karma)}`, true)
            .setImage(img4)
            .setFooter(`${owner}`, img3)
            .setTimestamp()
            .setColor(`${color}`)

            if (player.guild != null) {
                playerInfoEmbed.addField('Guild:', `${player.guild.name}`)
            }

            if (player.guild != null && player.guild.tag != null) {
                playerInfoEmbed.setDescription(`[${player.rank}] ${player.nickname} [${player.guild.tag}]`)
                playerInfoEmbed.addField('Guild:', `${player.guild.name} [${player.guild.tag}]`)
            }
            
                playerInfoEmbed.addField('Main MC Version:', `${playerMinecraftVersion}`, true)
                playerInfoEmbed.addField('First Login:', `${firstL}`)
                playerInfoEmbed.addField('Last Login:', `${lastL}`)
                playerInfoEmbed.addField('Status:', `${playerIsOnline}`, true)

            if (player.rank.includes('MVP+')) {
                if (player.plusColor == null) {
                    playerInfoEmbed.addField('Plus Color:', '`Red`')
                } else {
                    playerInfoEmbed.addField('Plus Color:', `${player.plusColor}`)
                }
            }

                // playerInfoEmbed.addField('Social Media:', `Run h!socials ${player.nickname}`) //나중에 추가하기
                playerInfoEmbed.setFooter(owner, img3)

            message.channel.send(playerInfoEmbed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            try
            {
                user.send(playerInfoEmbed)
            }
            catch(e)
            {
                message.channel.send(Embed3)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }

        }).catch(e => { // error messages
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