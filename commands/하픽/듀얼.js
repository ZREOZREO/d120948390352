const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");
const fs = require('fs');
const fetch = require('node-fetch');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(hpapikey);
const commaNumber = require('comma-number');

module.exports = {
    name: "듀얼",
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
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const Embed = new Discord.MessageEmbed()
                .setAuthor(`HYPIXEL INFO by ${owner}`, img3)
                .setThumbnail(img3)
                .setTitle(`Duels Stats`)
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .addField('Kills:', `${commaNumber(player.stats.duels.kills)}`, true)
                .addField('Losses:', `${commaNumber(player.stats.duels.losses)}`, true)
                .addField('Deaths:', `${commaNumber(player.stats.duels.deaths)}`, true)
                .addField('Wins:', `${commaNumber(player.stats.duels.wins)}`, true)
                .addField('K/D:', `${commaNumber(player.stats.duels.KDRatio)}`, true)
                .addField('W/L:', `${commaNumber(player.stats.duels.WLRatio)}`, true)
                .addField('** **', '** **')
                .addField(`기타 사용법`, `**${prefix}듀얼 클래식\n${prefix}듀얼 유챔\n${prefix}듀얼 스워\n${prefix}듀얼 브릿지\n${prefix}듀얼 스모\n${prefix}듀얼 오피\n${prefix}듀얼 콤보**`)
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
            })
        }

        if (args[1] == null && args[0] != null) 
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

        if (args[0] == '클래식' || args[0] == 'c') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const Embed = new Discord.MessageEmbed()
                .setAuthor(`HYPIXEL INFO BY ${owner}`, img3)
                .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
                .setTitle('Classic Duels Stats')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(owner, img3)
                .addField('Kills:', `${commaNumber(player.stats.duels.classic.kills)}`, true)
                .addField('Losses:', `${commaNumber(player.stats.duels.classic.losses)}`, true)
                .addField('Deaths:', `${commaNumber(player.stats.duels.classic.deaths)}`, true)
                .addField('Wins:', `${commaNumber(player.stats.duels.classic.wins)}`, true)
                .addField('K/D:', `${commaNumber(player.stats.duels.classic.KDRatio)}`, true)
                .addField('W/L:', `${commaNumber(player.stats.duels.classic.WLRatio)}`, true)
                .setImage(img4)
                .setFooter(`${owner}`, img3)
                .setTimestamp()
                .setColor(`${color}`)
    
                message.channel.send(Embed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})

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



        if (args[0] == '유챔') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const Embed = new Discord.MessageEmbed()
                .setAuthor(`HYPIXEL INFO BY ${owner}`, img3)
                .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
                .setTitle('UHC Duels Stats')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(owner, img3)
                .addField('Kills:', `${commaNumber(player.stats.duels.uhc['overall'].kills)}`, true)
                .addField('Losses:', `${commaNumber(player.stats.duels.uhc['overall'].losses)}`, true)
                .addField('Deaths:', `${commaNumber(player.stats.duels.uhc['overall'].deaths)}`, true)
                .addField('Wins:', `${commaNumber(player.stats.duels.uhc['overall'].wins)}`, true)
                .addField('K/D:', `${commaNumber(player.stats.duels.uhc['overall'].KDRatio)}`, true)
                .addField('W/L:', `${commaNumber(player.stats.duels.uhc['overall'].WLRatio)}`, true)
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

        if (args[0] == '스워' || args[0] == 'sw') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const Embed = new Discord.MessageEmbed()
                .setAuthor(`HYPIXEL INFO BY ${owner}`, img3)
                .setThumbnail('https://hypixel.net/styles/hypixel-uix/hypixel/game-icons/Duels-64.png')
                .setTitle('SkyWars Duels Stats')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(owner, img3)
                .addField('Kills:', `${commaNumber(player.stats.duels.skywars['overall'].kills)}`, true)
                .addField('Losses:', `${commaNumber(player.stats.duels.skywars['overall'].losses)}`, true)
                .addField('Deaths:', `${commaNumber(player.stats.duels.skywars['overall'].deaths)}`, true)
                .addField('Wins:', `${commaNumber(player.stats.duels.skywars['overall'].wins)}`, true)
                .addField('K/D:', `${commaNumber(player.stats.duels.skywars['overall'].KDRatio)}`, true)
                .addField('W/L:', `${commaNumber(player.stats.duels.skywars['overall'].WLRatio)}`, true)
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

        if (args[0] == '브릿지' || args[0] == 'b') {

            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const Embed = new Discord.MessageEmbed()
                .setAuthor(`HYPIXEL INFO BY ${owner}`, img3)
                .setThumbnail('https://hypixel.net/styles/hypixel-uix/hypixel/game-icons/Duels-64.png')
                .setTitle('The Bridge Duels Stats')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(owner, img3)
                .addField('W/L:', `${commaNumber(player.stats.duels.bridge['overall'].winstreak)}`, true)
                .addField('Kills:', `${commaNumber(player.stats.duels.bridge['overall'].kills)}`, true)
                .addField('Losses:', `${commaNumber(player.stats.duels.bridge['overall'].losses)}`, true)
                .addField('Deaths:', `${commaNumber(player.stats.duels.bbridge['overall'].deaths)}`, true)
                .addField('Wins:', `${commaNumber(player.stats.duels.bridge['overall'].wins)}`, true)
                .addField('K/D:', `${commaNumber(player.stats.duels.bridge['overall'].KDRatio)}`, true)
                .addField('W/L:', `${commaNumber(player.stats.duels.bridge['overall'].WLRatio)}`, true)
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

        if (args[0] == '스모') {

            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('Sumo Duels Stats', img3)
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', `${commaNumber(player.stats.duels.sumo.kills)}`, true)
                    .addField('Losses:', `${commaNumber(player.stats.duels.sumo.losses)}`, true)
                    .addField('Deaths:', `${commaNumber(player.stats.duels.sumo.deaths)}`, true)
                    .addField('Wins:', `${commaNumber(player.stats.duels.sumo.wins)}`, true)
                    .setFooter(owner, img3)

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
                };

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

        if (args[0] == '오피') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const Embed = new Discord.MessageEmbed()
                    .setAuthor('OP Duels Stats', img3)
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', `${commaNumber(player.stats.duels.op['overall'].kills)}`, true)
                    .addField('Losses:', `${commaNumber(player.stats.duels.op['overall'].losses)}`, true)
                    .addField('Deaths:', `${commaNumber(player.stats.duels.op['overall'].deaths)}`, true)
                    .addField('Wins:', `${commaNumber(player.stats.duels.op['overall'].wins)}`, true)
                    .setFooter(owner, img3)

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
                };

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

        if (args[0] == '콤보') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const Embed = new Discord.MessageEmbed()
                    .setAuthor('Combo Duels Stats', img3)
                    .setColor(color)
                    .addField('Kills:', `${commaNumber(player.stats.duels.combo.kills)}`, true)
                    .addField('Losses:', `${commaNumber(player.stats.duels.combo.losses)}`, true)
                    .addField('Deaths:', `${commaNumber(player.stats.duels.combo.deaths)}`, true)
                    .addField('Wins:', `${commaNumber(player.stats.duels.combo.wins)}`, true)
                    .setFooter(owner, img3)

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
                };

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
}