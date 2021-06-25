const {MessageEmbed} = require("discord.js")

module.exports = {
    name: "help",
    description: "help pog",
    category: "utility",
    aliases: ["sos","commands","cmds", "cmd", "list", "commandlist"], 
    cooldown: 5,
    slash: false,
    run: async(client, slash, message, args) => {
      var in_prefix = await client.dispatcher.getGuildPrefix(message.guild.id);
      if(args[0] === 'utility') {
        var utility = client.commands.filter(cmd => cmd.category == "utility").map(cmd => `\`${cmd.name}\``).join(", ")
        var utilembed = new MessageEmbed()
        .setColor("#e54918")
        .setTitle('<:kt_job:822478953939599390> Utility Commands')
        .setDescription(utility)
        .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
        return message.inlineReply(utilembed)
                    .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
      } 

      if(args[0] === 'image') {
        var image = client.commands.filter(cmd => cmd.category == "image").map(cmd => `\`${cmd.name}\``).join(", ")
        var imgembed = new MessageEmbed()
        .setColor("#e54918")
        .setTitle('<:kt_hey:822468640103202858> Image Commands')
        .setDescription(image)
        .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
        return message.inlineReply(imgembed)
                    .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
      } 

      if(args[0] === 'fun') {
        var fun = client.commands.filter(cmd => cmd.category == "fun").map(cmd => `\`${cmd.name}\``).join(", ")
        var funembed = new MessageEmbed()
        .setColor("#e54918")
        .setTitle('<:kt_pepega:822475395281715250> Fun Commands')
        .setDescription(fun)
        .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
        return message.inlineReply(funembed)
                    .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
      }
      
      if(args[0] === 'minecraft') {
        var minecraft = client.commands.filter(cmd => cmd.category == "minecraft").map(cmd => `\`${cmd.name}\``).join(", ")
        var mcembed = new MessageEmbed()
        .setColor("#e54918")
        .setTitle('<:kt_scared:832294078431494164> Minecraft Commands')
        .setDescription(minecraft)
        .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
        return message.inlineReply(mcembed)
                    .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
      } 

      if(args[0] === 'config') {
        var config = client.commands.filter(cmd => cmd.category == "config").map(cmd => `\`${cmd.name}\``).join(", ")
        var confembed = new MessageEmbed()
        .setColor("#e54918")
        .setTitle('<:kt_dev:838667904336527390> Config Commands')
        .setDescription(config)
        .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
        return message.inlineReply(confembed)
                    .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
      } 

      var general = new MessageEmbed()
        .setColor("#e54918")
        .setURL("https://karot.xyz/commands.html")
        .setTitle('Karot Commands')
        .addFields(
          { name: '<:kt_job:822478953939599390> Utility', value: `\`${in_prefix}help utility\``, inline: true },
          { name: '<:kt_hey:822468640103202858> Image', value: `\`${in_prefix}help image\``, inline: true },
          { name: '<:kt_pepega:822475395281715250> Fun', value: `\`${in_prefix}help fun\``, inline: true },
          { name: '<:kt_scared:832294078431494164>  Minecraft', value: `\`${in_prefix}help minecraft\``, inline: true },
          { name: '<:kt_dev:838667904336527390>  Config', value: `\`${in_prefix}help config\``, inline: true },
          { name: 'Links', value: '[Support server](https://discord.com/invite/9Byp7mWfMF) - [Add the Bot](https://discord.com/oauth2/authorize?client_id=822391645697212416&permissions=322632&redirect_uri=https://karot.xyz/hi.html&response_type=code&scope=bot%20applications.commands) - [Website](https://karot.xyz) - [GitHub](https://github.com/KarotBot)'},
        )
        .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
      message.inlineReply(general)
                  .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    }
}