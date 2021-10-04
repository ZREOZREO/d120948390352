const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const { prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey, channelid } = require("../../config.json");

module.exports = {
    name: '퇴근',
    execute(message) {
        message.delete()
        const user = message.author

        const Embed = new Discord.MessageEmbed()
            .setTitle(`출퇴근 기록`)
            .setDescription(`**${user.username}#${user.discriminator} 님이 퇴근하셨습니다**`)
            .setTimestamp()
            .setColor(`${color}`)

        if (!message.member.hasPermission("ADMINISTRATOR")) { return; }

        client.channels.cache.get(channelid).send(Embed);
    }
}
