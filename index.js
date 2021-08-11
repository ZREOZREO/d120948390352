const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("./config.json");
const fs = require('fs');
const fetch = require('node-fetch');
const moment = require('moment');

require('dotenv').config();

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`)
        client.commands.set(command.name, command);
    }
}

const eventFiles = fs.readdirSync('./events');
for(const file of eventFiles)
{
    const event = require(`./events/${file}`);
    if(event.once) {
        client.once(event.name, (...args) => event.execute(...args, client))
    }
    else
    {
        client.on(event.name, (...args) => event.execute(...args))
    }
}


client.on('ready', ()=> {
    console.clear()
    console.log("BOT IS STARTED \r\n")
})

client.on('message', message => {
    const folderPath = `./DB/CHAT/${client.guilds.cache.get(message.guild.id).name} - ${client.guilds.cache.get(message.guild.id).id}`
    const filePath = `./DB/CHAT/${client.guilds.cache.get(message.guild.id).name} - ${client.guilds.cache.get(message.guild.id).id}/${message.channel.name} - ${message.channel.id}.txt`
    const format1 = 'YYYY년 MM월 DD일 HH시 mm분';
    const date = new Date()
    const log = `${moment(date).format(format1)} | 서버: ${message.guild.name} | 채널: ${message.channel.name} | 유저: ${message.author.tag} | 메시지: ${message.content} \r\n`

    if(message.channel.type == 'dm')
    {
        return
    }

    if(message.mentions.has(client.user))
    {
        const filePath = `./DB/REPLY.txt`
        const reply = fs.readFile(filePath, (error, txtString) => {
            message.channel.send(txtString.toString())
        })
    }

    if(message.guild.name == null)
    {
        message.guild.name == "Unknown"
    }

    if(message.channel.name == null)
    {
        message.channel.name == "Unknown"
    }

    try
    {
        if(!fs.existsSync(folderPath))
        {
            fs.mkdirSync(folderPath)
        }
    
        fs.open(filePath, 'a', function(){});
        fs.appendFile(filePath, log, function(){});
    }
    catch(e)
    {
        return
    }

    if(message.content.includes("discord.gg"))
    {

        if(message.guild.me.hasPermission("MANAGE_MESSAGES") || message.guild.me.hasPermission("ADMINISTRATOR"))
        {
            message.delete()
        }

        const Embed = new Discord.MessageEmbed()
        .setAuthor(`DISCORD LINK DETECTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`DISCORD LINK DETECTED!`)
        .setDescription(`MESSAGE = ${message.content}`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        message.channel.send(Embed)
        .then(msg => {setTimeout(() => msg.delete(), 3000)})
        
    }

    if(message.content.startsWith(basic))
    {
        try
        {
            const filePath = `./DB/CHAT/LOG.txt`;
    
            console.log(`명령어 | ${moment(date).format(format1)} | 서버: ${message.guild.name} | 채널: ${message.channel.name} | \r\n유저: ${message.author.tag} | 메시지: ${message.content} \r\n`)
            const log = `명령어 | ${moment(date).format(format1)} | 서버: ${message.guild.name} | 채널: ${message.channel.name} | 유저: ${message.author.tag} | 메시지: ${message.content}`
        
            fs.open(filePath, 'a', function(){});
            fs.appendFile(filePath, log, function(){});
        }
        catch(e)
        {
            return;
        }
    }


})


client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const format1 = 'YYYY년 MM월 DD일 HH시 mm분';
    const date = new Date()

    //================================================================

    if(!message.content.startsWith(basic))
    {
        return;
    }    
    
    if(!client.commands.has(command)) return;

    try
    {
        client.commands.get(command).execute(message, args);
    }
    catch(e)
    {   
        const Embed = new Discord.MessageEmbed()
        .setAuthor(`ERROR REPORT by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`ERROR REPORTED!`)
        .setDescription(e)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)


        console.log(`에러발생 | ${moment(date).format(format1)} | 서버: ${message.guild.name} | \r\n유저: ${message.author.tag} | 메시지: ${message.content} \r\n`)
        message.channel.send(Embed)
        .then(msg => {setTimeout(() => msg.delete(), 3000)})
    }

})


client.login(process.env.TOKEN)