const Discord = require("discord.js")

module.exports = {
    name: 'poll',
    description: 'Embeds your messages and creates a poll with voting :D',
    category: "utility",
    slash: false,
    cooldown: 5,
    userRequiredPermissions: "MANAGE_MESSAGES",
    run: async(client, slash, message, args) => {
        if (!args[0]) {
            message.delete();
            return message.reply('<:kt_scared:832294078431494164> You need to specify the question!')
        }

        var question = args.slice(0).join(" ");

        var pollembed = new Discord.MessageEmbed()
            .setTitle(`Poll by ${message.author.tag}`)
            .setDescription(question)
            .setColor('#e54918')
        message.channel.send(pollembed).then(function (message) {
            message.react('822473993780068393').catch(e => message.react('✅'));
            message.react('822475199755583488').catch(e => message.react('❌'));
        })
            .catch(error =>
                message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
            );
    },
};