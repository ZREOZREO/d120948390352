// const Discord = require('discord.js');
// const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");
// const HypixelAPIReborn = require('hypixel-api-reborn');
// const hypixelAPIReborn = new HypixelAPIReborn.Client(hpapikey);
// const commaNumber = require('comma-number');

// module.exports = {
//     name: 'watchdog',
//     aliases: [ "wdr" ],
//     execute(message, args) {
//         hypixelAPIReborn.getWatchdogStats().then((stats) => {
//             const watchdogStatsEmbed = new Discord.MessageEmbed()
//                 .setAuthor('Watchdog Stats', img3)
//                 .setColor(color)
//                 .setFooter(owner, img3)
//                 .addField('Total Watchdog bans:', `${commaNumber(stats.byWatchdogTotal)}`, true)
//                 .addField('Bans in the last minute:', `${commaNumber(stats.byWatchDogLastMinute)}`, true)
//                 .addField('Total staff bans', `${commaNumber(stats.byStaffTotal)}`, true)
//             message.channel.send(watchdogStatsEmbed);
//         });
//     }
// }

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
    name: '워치독',
    async execute(message, args){
        const user = message.author
        const Embed3 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`특정 유저에게 메시지를 보낼 수 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        hypixelAPIReborn.getWatchdogStats().then((stats) => {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`HYPIXEL INFO BY ${owner}`, img3)
            .setThumbnail(img)
            .setTitle('Watchdog Stats')
            .addField('Total Watchdog bans:', `${commaNumber(stats.byWatchdogTotal)}`, true)
            .addField('Bans in the last minute:', `${commaNumber(stats.byWatchdogLastMinute)}`, true)
            .addField('Total staff bans', `${commaNumber(stats.byStaffTotal)}`, true)
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
        });
    }
}
