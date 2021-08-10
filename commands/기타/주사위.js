const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");


module.exports = {
    name: '주사위',
    execute(message, max){
        message.delete()
        const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

        const Embed3 = new Discord.MessageEmbed()
        .setAuthor(`DICE BY ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`DM으로 주사위 결과를 보내드렸어요!`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`DICE by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`DICE`)
        .setDescription(`**주사위 결과는 ${Math.floor(Math.random() * number.length)}입니다**`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`특정 유저에게 메시지를 보낼 수 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        if(message.author.id == ownerid)
        {
            message.channel.send(Embed)
        }
        else
        {
            message.channel.send(Embed3)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            user.send(Embed)
            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            try
            {
                message.author.send(Embed)
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
        }
    }
}