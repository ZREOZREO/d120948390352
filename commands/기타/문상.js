const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");


module.exports = {
    name: '문상',
    execute(message, r=1){
        message.delete()

        const pinlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const user = message.author;

        const Embed3 = new Discord.MessageEmbed()
        .setAuthor(`RANDOM PIN BY ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`DM으로 랜덤문상를 보내드렸어요!`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        for(i=0; i <= r; i++)
        {
            // pin = `${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}-${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}-${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}-${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}${Math.floor(Math.random() * pinlist.length)}`;

            const Embed = new Discord.MessageEmbed() 
            .setAuthor(`RANDOM PIN by ${owner}`, img)
            .setThumbnail(img)
            .setTitle(`RANDOM PIN`)
            .setDescription(`**PIN = ${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}-${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}-${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}-${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}${Math.floor(Math.random()*(10))}**`)
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
            .setAuthor(`RANDOM PIN BY ${owner}`, img)
            .setThumbnail(img)
            .setTitle(`DM으로 RANDOM PIN을 보내드렸어요!`)
            .setFooter(`${owner}`, img)
            .setTimestamp()
            .setColor(`${color}`)
    
            try
            {
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
                }
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
        }
    }
}