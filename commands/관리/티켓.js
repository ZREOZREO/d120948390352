const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, token, color, errorcolor, owner, ownerid, img, img2, covidapi} = require("../../config.json");


module.exports = {
    name: "티켓",
    execute(message){
    const channel2 = message.guild.channels.create(`${message.author.id}의 티켓`);
    const channel = message.guild.channels.cache.find((channel) => channel.name === `${message.author.id}의 티켓`);

    // channel.updateOverwrite(message.guild.id, {
    //     SEND_MESSAGE: false,
    //     VIEW_CHANNEL: false,
    // });
    // channel.updateOverwrite(message.author, {
    //     SEND_MESSAGE: true,
    //     VIEW_CHANNEL: true,    
    // });

    //뭔가 이상함

    const reactionMessage = channel.send("문의를 주셔서 감사합니다.");

    try {
        reactionMessage.react("🔒");
        reactionMessage.react("⛔");
    } catch (err) {
        channel.send("실행 도중 에러 발생.");
        throw err;
    }

    const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
        { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
            case "🔒":
                channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
                break;
            case "⛔":
                channel.send("5초 후 채널이 삭제됩니다");
                setTimeout(() => channel.delete(), 5000);
                break;
        }
    });

    message.channel
        .send(`곧 티켓 생성을 하겠습니다! ${channel}`)
        .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
            throw err;
        });
},
};