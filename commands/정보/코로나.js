const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");
const fetch = require('node-fetch');

module.exports = {
    name: '코로나',
    execute(message) {
        message.delete()

        if(message.content === '제로야 코로나') {
            fetch(`https://api.corona-19.kr/korea/?serviceKey=${covidapi}`)
            .then((res) => res.json())
            .then((json) => {
            let Embed = new Discord.MessageEmbed()
            .setAuthor(`COVID-19 STATS by ${owner}`, img)
            .setThumbnail(img)
            .setTitle("KOREA COVID-19 STATS")
            .setDescription(json["updateTime"])
            .addFields(
                {name: '오늘 확진자 수', value: `${json["recoveredPercentage"]}%`, inline: true },
                {name: '국내 완치율', value: `${json["recoveredPercentage"]}%`, inline: true },
                {name: '국내 사망률', value: `${json["deathPercentage"]}%`, inline: true },
                {name: '국내 검사률', value: `${json["checkingPercentage"]}%`, inline: true },

                {name: '국내 누적 확진자수', value: `${json["TotalCase"]}명`, inline: true },
                {name: '국내 누적 완치자수', value: `${json["TotalRecovered"]}명`, inline: true },
                {name: '국내 누적 사망자수', value: `${json["TotalDeath"]}명`, inline: true },
            )
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
    
            const Embed3 = new Discord.MessageEmbed()
            .setAuthor(`COVID-19 STATS by ${owner}`, img)
            .setThumbnail(img)
            .setTitle(`DM으로 코로나 정보를 보내드렸어요!`)
            .setFooter(`${owner}`, img)
            .setTimestamp()
            .setColor(`${color}`)

            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            message.channel.send(Embed3)
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
            })
        }}
}