const Discord = require("discord.js")

module.exports = {
  name: 'embed',
  description: 'Embeds your messages :D',
  category: "utility",
  slash: false,
  cooldown: 5,
  userRequiredPermissions: "MANAGE_MESSAGES",
  run: async(client, slash, message, args) => {
    message.delete()
 if(!args[2]) {
            return message.reply('Please specify the color, title & description of the embed you want to create!')
        }

        if(args[2]) {
      var description = args.slice(2).join(" ");
         
        var argsembed = new Discord.MessageEmbed()
        .setColor(args[0])
         .setTitle(args[1])
         .setDescription(description)
         .setFooter(message.author.tag, message.author.avatarURL({dynamic:true}));
        message.channel.send(argsembed)
                    .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
        }
  },
};