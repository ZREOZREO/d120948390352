const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");

const moment = require('moment');

const filterLevels = {
    DISABLED: '없음',
    MEMBERS_WITHOUT_ROLES: '특정 역할만',
    ALL_MEMBERS: '모두에게'
};

const verificationLevels = {
    NONE: '없음',
    LOW: '약함',
    MEDIUM: '보통',
    HIGH: '강력',
    VERY_HIGH: '매우 강력'
};

const regions = {
    brazil: '브라질',
    europe: '유럽',
    hongkong: '홍콩',
    india: '인도',
    japan: '일본',
    russia: '러시아',
    singapore: '싱가포르',
    southafrica: '남아프리카',
    sydeny: '시드니',
    'us-central': '미국 중부',
    'us-east': '미국 동부',
    'us-west': '미국 서부',
    'us-south': '미국 남부'
};

module.exports = {
    name: '서버정보',
    execute(message){
        message.delete()

        const user = message.author
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

        const Embed = new Discord.MessageEmbed()
        .setAuthor(`SERVER INFO by ${owner}`, img)
        .setThumbnail(message.guild.iconURL())
        .setTitle("SERVER INFO")
        .addField(`기본`, [
            `**이름:** ${message.guild.name}`,
            `**아이디:** ${message.guild.id}`,
            `**서버장:** ${message.guild.owner} (${message.guild.ownerID})`,
            `**부스트레벨:** ${message.guild.premiumTier ? `레벨 ${message.guild.premiumTier}` : '없음'}`,
            `**욕설필터:** ${filterLevels[message.guild.explicitContentFilter]}`,
            `**보안레벨:** ${verificationLevels[message.guild.verificationLevel]}`,
            `**서버생성일:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`,
            `** **`, `** **`
        ])
        .addField(`통계`, [
            `**역할 수:** ${roles.length}`,
            `**이모지 수:** ${emojis.size}`,
            `**정적 이모지 수:** ${emojis.filter(emoji => !emoji.animated).size}`,
            `**동적 이모지 수:** ${emojis.filter(emoji => emoji.animated).size}`,
            `**서버인원 수:** ${message.guild.memberCount}`,
            `**사람 수:** ${members.filter(member => !member.user.bot).size}`,
            `**봇 갯수:** ${members.filter(member => member.user.bot).size}`,
            `**텍스트 채널:** ${channels.filter(channel => channel.type === 'text').size}`,
            `**보이스 채널:** ${channels.filter(channel => channel.type === 'voice').size}`,
            `**부스트 갯수:** ${message.guild.premiumSubscriptionCount || '0'}`,
            `** **`, `** **`
        ])
        .addField(`상태`, [
            `**온라인:** ${members.filter(member => member.presence.status === 'online').size}`,
            `**잠수:** ${members.filter(member => member.presence.status === 'idle').size}`,
            `**방해금지:** ${members.filter(member => member.presence.status === 'dnd').size}`,
            `**오프라인:** ${members.filter(member => member.presence.status === 'offline').size}`,
        ])
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
        .setAuthor(`USER INFO BY ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`DM으로 서버정보를 보내드렸어요!`)

        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        try
        {
            user.send(Embed)
            message.channel.send(Embed3)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }
        catch(e)
        {
            message.channel.send(Embed2)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            console.error(e)
        }
    }

}