const Discord = require('discord.js')

module.exports = {
	name: 'airpods',
	description: 'Gives yer air pod swag',
	cooldown: 4,
	category: "image",
    aliases: ["apple","ap"],
  slash: false,
  run: async(client, slash, message, args) => {
            
        if(!args[0]) {
            var usrname = new Discord.MessageEmbed()
           .setColor('#e54918')
            .setImage(`https://www.apple.com/shop/preview/engrave/PRXJ2AM/A?th=${message.author.tag}&s=1&f=mixed`)
            .setColor('#e54918')
            .setURL("https://karot.xyz")
           .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
            return message.inlineReply(usrname)
                        .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
        }
            
        if(args[1]) {
            var toomuch = new Discord.MessageEmbed()
           .addField('<:kt_nesuhlas:822475199755583488> Something went wrong...', 'You **cannot** have a space in the engraving.')
           .setColor('#e54918')
           .setURL("https://karot.xyz")
           .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
            return message.inlineReply(toomuch)
                        .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
        }
            
         if(args[0].length > 13) {
         var max = new Discord.MessageEmbed()
         .addField('<:kt_nesuhlas:822475199755583488> Something went wrong...', `The engraving **cannot** be longer than 14 characters!`)
         .setColor('#e54918')
         .setURL("https://karot.xyz")
         .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
         return message.inlineReply(max)
                              .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    }
        
          var embed = new Discord.MessageEmbed()
            .setImage(`https://www.apple.com/shop/preview/engrave/PRXJ2AM/A?th=${args[0]}&s=1&f=mixed`)
            .setColor('#e54918')
            .setURL("https://karot.xyz")
            .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
         message.inlineReply(embed)
                     .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    }}
