const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, token, color, errorcolor, owner, ownerid, img, img2, covidapi} = require("../../config.json");

module.exports = {
    name: "청소",
    execute(message){
        message.delete()
        const user = message.author;

        const Embed = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`채팅을 청소 할 권한이 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`1~100 까지의 숫자만 입력해주세요`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        const Embed3 = new Discord.MessageEmbed() 
        .setAuthor(`CLEARED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`${parseInt(clearLine)} MESSAGES ARE DELETED!`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)


        if(message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("ADMINISTRATOR") || message.member.id === `${ownerid}`)
        {
            var clearLine = message.content.slice(`${prefix}청소 `.length);
            var isNum = !isNaN(clearLine)

            if(isNum && (clearLine <= 0 || 100 < clearLine)) 
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                return;
            } 
            else if(!isNum) 
            { 
                if(message.content.split('').length == 2) {
                    if(isNaN(message.content.split(' ')[2])) return;

                    var iduser = message.content.split(' ')[1].split('!')[1].split('>')[0];
                    var count = parseInt(message.content.split(' ')[2])+1;
                    let _cnt = 0;

                    message.channel.fetchMessages().then(collected => {
                    collected.every(msg => {
                        if(msg.author.id == iduser) 
                        {
                            msg.delete();
                            ++_cnt;
                        }
                        return !(_cnt == count);
                    });
                    });
            }
            } 
            else 
            {
                // for(i = 0; clearLine+1; i++)
                // {
                //     message.channel.delete();
                // }
                // message.channel.bulkDelete(parseInt(clearLine)+1)
                //     .then(() => {AutoMsgDelete(message, Embed3);})
                //     .catch(error)
            }
        }
        else
        {
            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
    }
}