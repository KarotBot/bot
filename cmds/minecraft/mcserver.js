const Discord = require('discord.js');

module.exports  = {
    name: 'mcserver',
    category: 'minecraft',
    slash: false,
    description: 'Displays info such as IP, status ext. about a Minecraft server.',
    run: async(client, slash, message, args) => {
        if(!args[0]) {
            return message.inlineReply('<:kt_nesuhlas:822475199755583488> Please specify the IP/Hostname of the server!')
        }

        if(args[1]) {
            return message.inlineReply('<:kt_nesuhlas:822475199755583488> Please specify a valid IP/Hostname!')
        }

        const axios = require("axios").default

        const buff = await axios.get(`https://api.mcsrvstat.us/2/${args[0]}`);

        if(buff.data.online === 'false') {
            return message.inlineReply(`<:kt_nesuhlas:822475199755583488> This server is offline or doesn't exist!`)
        }

        if(!buff.data.ip) {
            return message.inlineReply('Something went wrong! ')
        }

        if(!buff.data.hostname) {
            return message.inlineReply('Something went wrong! ')
        }

        if(!buff.data.port) {
            return message.inlineReply('Something went wrong! ')
        }

        if(!buff.data.version) {
            return message.inlineReply('Something went wrong! ')
        }

        if(!buff.data.motd.clean) {
            return message.inlineReply('Something went wrong! ')
        }

        if(!buff.data.players.online) {
            return message.inlineReply('Something went wrong! ')
        }

        if(!buff.data.players.max) {
            return message.inlineReply('Something went wrong! ')
        }

        var statusembed = new Discord.MessageEmbed()
            .setColor('#E54918')
            .setTitle(buff.data.hostname)
            .addFields(

                { name: 'Players:', value: `\`${buff.data.players.online}\`/\`${buff.data.players.max}\``, inline: false },
                { name: 'Motd:', value: `${buff.data.motd.clean}`, inline: false },
                { name: 'Version:', value: `\`${buff.data.version}\``, inline: false },
                { name: 'IP:', value: `\`${buff.data.ip}\``, inline: false },
                { name: 'Port:', value: `\`${buff.data.port}\``, inline: false },
            )
            .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
            message.inlineReply(statusembed)
                .catch(error =>
                    message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
                );
    }
}