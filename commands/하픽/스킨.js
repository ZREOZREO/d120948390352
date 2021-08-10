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
    name: '스킨',
    async execute(message, args){
        message.delete()
        try {

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

            const playerUUIDFetch = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`); // fetch uuid 
            const playerUUIDData = await playerUUIDFetch.json(); 
            const playerUsername = await fetch(`https://api.mojang.com/user/profiles/${playerUUIDData.id}/names`); // just for username :upside_down:
            const playerUsernameData = await playerUsername.json();

            const Embed = new Discord.MessageEmbed()
            .setAuthor(`PLAYER SKIN BY ${owner}`, img3)
            .setThumbnail(`https://crafatar.com/skins/${playerUUIDData.id}`)
            .setTitle('Player Skin')
            .addField('Username', `${playerUsernameData[playerUsernameData.length - 1].name}`)
            .addField('Apply Skin', `[Link](https://www.minecraft.net/en-us/profile/skin/remote?url=https://crafatar.com/skins/${playerUUIDData.id})`)
            .setImage(`https://visage.surgeplay.com/full/${playerUUIDData.id}.png`)
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

        } 
        catch(e) 
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

            console.log("오류 1")
        }
    }
}