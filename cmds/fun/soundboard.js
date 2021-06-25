const Discord = require('discord.js');
const sounds = "`sus`, `break`, `party`, `denied`, `fart`, `law`, `triggered`"

module.exports = {
    name: 'soundboard',
    aliases: ['sb', 'sound', 'board', 'soundb', 'boardsound'],
    category: 'fun',
    slash: false,
    cooldown: 5,
    run: async(client, slash, message, args) => {

        if(args[0] === 'play') {
            if (args[1] === 'break') {
                if (!message.member.voice.channel) return message.channel.send(`<:kt_nesuhlas:822475199755583488> You must be in a **voice channel** to do this!`);

                const connection = await message.member.voice.channel.join().then(connection => {
                    connection.voice.setSelfDeaf(true);
                    const dispatcher = connection.play('break.mp3');
                    dispatcher.setVolume(0.5);

                    dispatcher.on('finish', () => {
                        connection.disconnect()
                    });

                    return message.inlineReply(`<:kt_uwu:822523520034144296> Now playing the **${args[1]}** sound effect!`)
                });
            }

            if (args[1] === 'sus') {
                if (!message.member.voice.channel) return message.channel.send(`<:kt_nesuhlas:822475199755583488> You must be in a **voice channel** to do this!`);

                const connection = await message.member.voice.channel.join().then(connection => {
                    connection.voice.setSelfDeaf(true);
                    const dispatcher = connection.play('sus.mp3');

                    dispatcher.on('finish', () => {
                        connection.disconnect()
                    });

                    return message.inlineReply(`<:kt_uwu:822523520034144296> Now playing the **${args[1]}** sound effect!`)
                });
            }

            if (args[1] === 'party') {
                if (!message.member.voice.channel) return message.channel.send(`<:kt_nesuhlas:822475199755583488> You must be in a **voice channel** to do this!`);

                const connection = await message.member.voice.channel.join().then(connection => {
                    connection.voice.setSelfDeaf(true);
                    const dispatcher = connection.play('party.mp3');

                    dispatcher.on('finish', () => {
                        connection.disconnect()
                    });

                    return message.inlineReply(`<:kt_uwu:822523520034144296> Now playing the **${args[1]}** sound effect!`)
                });
            }

            if (args[1] === 'denied') {
                if (!message.member.voice.channel) return message.channel.send(`<:kt_nesuhlas:822475199755583488> You must be in a **voice channel** to do this!`);

                const connection = await message.member.voice.channel.join().then(connection => {
                    connection.voice.setSelfDeaf(true);
                    const dispatcher = connection.play('denied.mp3');

                    dispatcher.on('finish', () => {
                        connection.disconnect()
                    });

                    return message.inlineReply(`<:kt_uwu:822523520034144296> Now playing the **${args[1]}** sound effect!`)
                });
            }

            if (args[1] === 'fart') {
                if (!message.member.voice.channel) return message.channel.send(`<:kt_nesuhlas:822475199755583488> You must be in a **voice channel** to do this!`);

                const connection = await message.member.voice.channel.join().then(connection => {
                    connection.voice.setSelfDeaf(true);
                    const dispatcher = connection.play('fart.mp3');

                    dispatcher.on('finish', () => {
                        connection.disconnect()
                    });

                    return message.inlineReply(`<:kt_uwu:822523520034144296> Now playing the **${args[1]}** sound effect!`)
                });
            }

            if (args[1] === 'law') {
                if (!message.member.voice.channel) return message.channel.send(`<:kt_nesuhlas:822475199755583488> You must be in a **voice channel** to do this!`);

                const connection = await message.member.voice.channel.join().then(connection => {
                    connection.voice.setSelfDeaf(true);
                    const dispatcher = connection.play('law.mp3');

                    dispatcher.on('finish', () => {
                        connection.disconnect()
                    });

                    return message.inlineReply(`<:kt_uwu:822523520034144296> Now playing the **${args[1]}** sound effect!`)
                });
            }

            if (args[1] === 'triggered') {
                if (!message.member.voice.channel) return message.channel.send(`<:kt_nesuhlas:822475199755583488> You must be in a **voice channel** to do this!`);

                const connection = await message.member.voice.channel.join().then(connection => {
                    connection.voice.setSelfDeaf(true);
                    const dispatcher = connection.play('triggered.mp3');

                    dispatcher.on('finish', () => {
                        connection.disconnect()
                    });

                    return message.inlineReply(`<:kt_uwu:822523520034144296> Now playing the **${args[1]}** sound effect!`)
                });
            }
        }

       if(!args[0]) {
           var in_prefix = await client.dispatcher.getGuildPrefix(message.guild.id);
           var soundlist = new Discord.MessageEmbed()
               .setTitle('Soundboard')
               .setDescription(`Use the play argument to play a sound from the list below! (e.g. ${in_prefix}sb play sus)`)
               .setURL('https://karot.xyz')
               .addField('A list of all available sounds:', sounds)
               .setColor('#e54918')
               .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
           return message.inlineReply(soundlist)
               .catch(error =>
                   message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
               );
       }

        if(args[0] === 'play' && !args[1]) {
            var soundlist = new Discord.MessageEmbed()
                .setTitle('Soundboard')
                .setURL('https://karot.xyz')
                .addField('A list of all available sounds:', sounds)
                .setColor('#e54918')
                .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
            return message.inlineReply(soundlist)
                .catch(error =>
                    message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
                );
        }

        if(args[0] === 'play') {
            if(!["sus","break","party","denied","fart","law","triggered"].includes(args[1])) {
                return message.inlineReply("<:kt_sad:854041374806245406> That sound sadly **wasn't found!**")
            }
        }


    }
}