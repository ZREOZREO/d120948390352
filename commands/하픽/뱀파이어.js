// const Discord = require('discord.js');
// const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");
// const HypixelAPIReborn = require('hypixel-api-reborn');
// const hypixelAPIReborn = new HypixelAPIReborn.Client(hpapikey);
// const commaNumber = require('comma-number')

// module.exports = {
//     name: 'vampirez',
//     aliases: [ "vz", "vampire", "vampires", "vampz" ],
//     execute(message, args) {
//         if (!args[0]) { // if someone didn't type in ign
//             const ign404 = new Discord.MessageEmbed()
//                 .setAuthor('Error', img3)
//                 .setDescription('You need to type in a player\'s IGN! (Example: `h!vampirez cxntered`)')
//                 .setColor(color)
//                 .setFooter(owner, img3)
//             message.channel.send(ign404)
//         }
//         hypixelAPIReborn.getPlayer(args[0]).then((player) => {
//             const embed = new Discord.MessageEmbed()
//                 .setAuthor('VampireZ Stats', img3)
//                 .setDescription(`[${player.rank}] ${player.nickname}`)
//                 .setColor(color)
//                 .setFooter(owner, img3)
//                 .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/VampireZ-64.png')
//                 .addField('Coins:', `${commaNumber(player.stats.vampirez.coins)}`, true)
//                 .addField('Human Wins:', `${commaNumber(player.stats.vampirez.human.wins)}`, true)
//                 .addField('Human Kills:', `${commaNumber(player.stats.vampirez.human.kills)}`, true)
//                 .addField('Human Deaths:', `${commaNumber(player.stats.vampirez.human.deaths)}`, true)
//                 .addField('Human KD Ratio:', `${commaNumber(player.stats.vampirez.human.KDRatio)}`, true)
//                 .addField('Zombie Kills:', `${commaNumber(player.stats.vampirez.zombie.kills)}`, true)

//             message.channel.send(embed);

//         }).catch(e => { // error messages
//             if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
//                 const player404 = new Discord.MessageEmbed()
//                     .setAuthor('Error', img3)
//                     .setDescription('I could not find that player in the API. Check spelling and name history.')
//                     .setColor(color)
//                     .setFooter(owner, img3)
//                 message.channel.send(player404)
//             } else {
//                 if (args[0]) {
//                     const error = new Discord.MessageEmbed()
//                     .setAuthor('Error', img3)
//                     .setDescription('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
//                     .setColor(color)
//                     .setFooter(owner, img3)
//                     message.channel.send(error)
//                 }
//             }       
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
    name: "뱀파이어",
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
            .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/VampireZ-64.png')
            .setTitle('VampireZ Stats')
            .addField('Coins:', `${commaNumber(player.stats.vampirez.coins)}`, true)
            .addField('Human Wins:', `${commaNumber(player.stats.vampirez.human.wins)}`, true)
            .addField('Human Kills:', `${commaNumber(player.stats.vampirez.human.kills)}`, true)
            .addField('Human Deaths:', `${commaNumber(player.stats.vampirez.human.deaths)}`, true)
            .addField('Human KD Ratio:', `${commaNumber(player.stats.vampirez.human.KDRatio)}`, true)
            .addField('Zombie Kills:', `${commaNumber(player.stats.vampirez.zombie.kills)}`, true)
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