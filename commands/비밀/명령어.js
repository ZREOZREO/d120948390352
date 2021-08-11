const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");

module.exports = {
    name: '명령어',
    execute(message, category){
        message.delete()
        const Embed = new Discord.MessageEmbed()
        .setAuthor(`🌈${prefix}+ 명령어🌈`, img)
        .setThumbnail(img)
        .setTitle(`DM으로 명령어를 보내드렸어요!`)
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

        const MainEmbed = new Discord.MessageEmbed()
        .setAuthor(`🌈${prefix}+ 명령어🌈`, img)
        .setThumbnail(img)
        .setTitle(`<>는 필수, []는 선택사항입니다`)
        .setDescription(`접두사 = ${prefix} \n**>**는 명령어에 포함되지 않습니다!`)
        .addField(`**>** 명령어 관리`, `관리에 관한 커맨드들`)
        .addField(`**>** 명령어 정보`, `정보에 관한 커맨드들`)
        // .addField(`**>** 명령어 테러`, `테러에 관한 커맨드들`)
        .addField(`**>** 명령어 하픽`, `하픽에 관한 커맨드들`)
        .addField(`**>** 명령어 기타`, `기타 명령어에 관한 커맨드들`)
        .setImage(img2)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const ManageEmbed = new Discord.MessageEmbed()
        .setAuthor(`🌈${prefix}+ 명령어🌈`, img)
        .setThumbnail(img)
        .addField(`**>** ${prefix}밴 <유저> <사유>`, `유저를 밴합니다`)
        .addField(`**>** ${prefix}언밴 <유저>`, `유저를 언밴합니다`)
        .addField(`**>** ${prefix}킥 <유저> <사유>`, `유저를 킥합니다`)
        // .addField(`**>** ${prefix}뮤트 <유저>`, `유저를 뮤트합니다`) -봉인
        // .addField(`**>** ${prefix}언뮤트 <유저>`, `유저를 언뮤트합니다`) -봉인
        // .addField(`**>** ${prefix}청소 <수량>`, `선택한 수 만큼의 메시지를 삭제합니다`) -불가능(for로 해결예정)
        // .addField(`**>** ${prefix}경고지급 <유저> <횟수>`, `유저에게 경고를 지급합니다`) -db
        // .addField(`**>** ${prefix}경고회수 <유저> <횟수>`, `유저에게서 경고를 회수합니다`)
        // .addField(`**>** ${prefix}경고초기화 <유저>`, `유저의 경고를 초기화합니다`)
        // .addField(`**>** ${prefix}경고확인 <유저>`, `유저의 경고를 확인합니다`)
        .addField(`**>** ${prefix}역할생성 <이름> <HEX COLOR>`, `역할을 생성합니다`)
        .addField(`**>** ${prefix}역할삭제 <역할>`, `역할을 삭제합니다`)
        .addField(`**>** ${prefix}역할지급 <유저> <역할>`, `유저에게 역할을 줍니다`)
        .addField(`**>** ${prefix}역할회수 <유저> <역할>`, `유저에게서 역할을 뺏습니다`)
        .addField(`**>** ${prefix}공지 <내용>`, `DM으로 공지를 보냅니다`)
        // .addField(`**>** ${prefix}티켓`, `티켓을 생성합니다`)
        .setImage(img2)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const InfoEmbed = new Discord.MessageEmbed()
        .setAuthor(`🌈${prefix}+ 명령어🌈`, img)
        .setThumbnail(img)
        .addField(`**>** ${prefix}서버정보`, `서버의 정보 표시하기`)
        .addField(`**>** ${prefix}유저정보 <멘션>`, `유저의 정보 표시하기`)
        .addField(`**>** ${prefix}봇정보`, `봇의 정보 표시하기`)
        .addField(`**>** ${prefix}코로나`, `코로나 정보 표시하기`) //-API 해결하기
        .setImage(img2)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const TerrorEmbed = new Discord.MessageEmbed()
            .setAuthor(`🌈${prefix}+ 명령어🌈`, img)
            .setThumbnail(img)
            .addField(`**>** ${prefix}도배 <숫자> <내용>`, `채널에 <숫자>번만큼 도배하기`)
            .addField(`**>** ${prefix}역할올삭제`, `모든 역할을 삭제하기`)
            // .addField(`**>** ${prefix}역할테러`, `역할을 생성해 테러하기`)
            // .addField(`**>** ${prefix}어드민주기`, `모든 사람에게 관리자주기`)
            // .addField(`**>** ${prefix}서버이름바꾸기 <이름>`, `서버의 이름을 바꾸기`)
            // .addField(`**>** ${prefix}반응 <이모지>`, `이모지로 반응달기`)
            // .addField(`**>** ${prefix}반응 무지개`, `무지개하트로 반응달기`)
            // .addField(`**>** ${prefix}위치추적`, `아이피로 위치 알아내기`)
            // .addField(`**>** ${prefix}채널삭제`, `채널을 모두 삭제하기`)
            // .addField(`**>** ${prefix}채널이름바꾸기`, `채널의 이름을 바꾸기`)
            // .addField(`**>** ${prefix}채널테러`, `채널을 생성해 테러하기`)~
            // .addField(`**>** ${prefix}올닉 <닉네임>`, `모든 사람의 닉을 바꾸기`)
            // .addField(`**>** ${prefix}올밴`, `모든 사람을 밴하기`)
            // .addField(`**>** ${prefix}올언밴`, `모든 사람을 언밴하기`)
            // .addField(`**>** ${prefix}올킥`, `모든 사람을 킥하기`)
            // .addField(`** **`, `** **`)
            // .addField(`**>** ${prefix}폭파`, `서버를 폭파합니다`)
            // .addField(`**>** ${prefix}테러`, `서버를 슬기롭게 조져줍니다`)
            .setImage(img2)
            .setFooter(`${owner}`, img)
            .setTimestamp()
            .setColor(`${color}`)

        const HypixelEmbed = new Discord.MessageEmbed()
        .setAuthor(`🌈${prefix}+ 명령어🌈`, img)
        .setThumbnail(img)
        .addField(`**>** ${prefix}베워 <닉네임>`, `BEDWARS 정보 표시하기`)
        .addField(`**>** ${prefix}스워 <닉네임>`, `SKYWARS 정보 표시하기`)
        .addField(`**>** ${prefix}듀얼 <종류> <닉네임>`, `DUELS 정보 표시하기`)
        .addField(`**>** ${prefix}티앤티 <닉네임>`, `TNT GAMES 정보 표시하기`)
        .addField(`**>** ${prefix}유챔 <닉네임>`, `UHC 정보 표시하기`)
        .addField(`**>** ${prefix}스피드유챔 <닉네임>`, `SPEED UHC 정보 표시하기`)
        .addField(`**>** ${prefix}빌드배틀 <닉네임>`, `BUILD BATTLE 정보 표시하기`)
        .addField(`**>** ${prefix}빌리치 <닉네임>`, `BLITZ SURVIVAL 정보 표시하기`)
        .addField(`**>** ${prefix}콥앤크 <닉네임>`, `COPS AND CRIMES 정보 표시하기`)
        .addField(`**>** ${prefix}메월 <닉네임>`, `MEGAWALLS 정보 표시하기`)
        .addField(`**>** ${prefix}머더 <닉네임>`, `MURDER MYSTERY 정보 표시하기`)
        .addField(`**>** ${prefix}뱀파이어 <닉네임>`, `VAMPIRE Z 정보 표시하기`)
        .addField(`**>** ${prefix}스매시 <닉네임>`, `SMASH HEROS 정보 표시하기`)
        .addField(`**>** ${prefix}워치독`, `WATCHDOG 정보 표시하기`)
        .addField(`**>** ${prefix}길드 <닉네임>`, `길드 정보 표시하기`)
        .addField(`**>** ${prefix}프로필 <닉네임>`, `프로필 정보 표시하기`)
        .addField(`**>** ${prefix}닉변 <닉네임>`, `닉변 정보 표시하기`)
        .addField(`**>** ${prefix}서버 <닉네임>`, `서버 정보 표시하기`)
        .addField(`**>** ${prefix}uuid <닉네임>`, `UUID 정보 표시하기`)

        .setImage(img2)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const OtherEmbed = new Discord.MessageEmbed()
            .setAuthor(`🌈${prefix}+ 명령어🌈`, img)
            .setThumbnail(img)
            // .addField(`**>** ${prefix}계산 <식>`, `식을 계산하기(사칙연산)`)
            // .addField(`**>** ${prefix}공백`, `공백 메시지 보내기`) - ** **
            // .addField(`**>** ${prefix}니트로 <개수>`, `랜덤 니트로 보내기`)
            // .addField(`**>** ${prefix}도박`, `도박하기(슬롯도박)`)
            // .addField(`**>** ${prefix}로고`, `로고 보내기`)
            // .addField(`**>** ${prefix}매크로 <종류>`, `매크로 기능(크시, 마냥, 범프)`)
            .addField(`**>** ${prefix}문상`, `랜덤 문상 보내기`)
            .addField(`**>** ${prefix}주사위 <숫자> <최대값>`, `<숫자>만큼주사위 굴리기`)
            // .addField(`**>** ${prefix}번역 <언어> <메시지>`, `메시지를 선택한 언어로 번역하기`)
            // .addField(`**>** ${prefix}아스키 <영어메시지>`, `아스키 메시지로 바꾸기`)
            // .addField(`**>** ${prefix}업타임`, `업타임 표시하기`)
            // .addField(`**>** ${prefix}클리어`, `채팅을 청소하기`)
            // .addField(`**>** ${prefix}토큰 <유저>`, `랜덤 토큰 표시하기`)
            // .addField(`**>** ${prefix}투표`, `투표 메시지 만들기`)
            // .addField(`**>** ${prefix}파이`, `파이 값 표시하기`)
            .addField(`**>** ${prefix}핑`, `핑을 표시하기(ms 단위)`)
            .setImage(img2)
            .setFooter(`${owner}`, img)
            .setTimestamp()
            .setColor(`${color}`)


        if(category == `관리`) 
        {
            try
            {
                message.author.send(ManageEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(ManageEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }
        }
        else if(category == `정보`) 
        {
            try
            {
                message.author.send(InfoEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(InfoEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }
        }
        else if(category == `테러`) 
        {
            try
            {
                message.author.send(TerrorEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(TerrorEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }


        }
        else if(category == `하픽`) 
        {
            try
            {
                message.author.send(HypixelEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(HypixelEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }


        }
        else if(category == `기타`) 
        {
            try
            {
                message.author.send(OtherEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(OtherEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }
            
        }
        else //제로야 명령어
        {
            try
            {
                message.author.send(MainEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(MainEmbed)
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
};