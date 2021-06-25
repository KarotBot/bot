const Discord = require('discord.js')

module.exports = {
  name: 'slots',
  description: '🍑🍑🍑',
  cooldown: 4,
  category: "fun",
  aliases: ["gamble"],
  slash: false,
  run: async(client, slash, message, args) => {
    // ported from hernikplays/m00n
    let slots = ["🍋", "🍌", "🍒", "🍓", "🍈", "🍑"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));

    if (slots[result1] === slots[result2] && slots[result2] === slots[result3]) {
      let wEmbed = new Discord.MessageEmbed()
        .addField('You won! GG', slots[result1] + slots[result2] + slots[result3], true)
        .setColor('#e54918')
        .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
      message.inlineReply(wEmbed)
                  .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    } else {
      let embed = new Discord.MessageEmbed()
        .addField('You lost! :(', slots[result1] + slots[result2] + slots[result3], true)
        .setColor('#e54918')
        .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
      message.inlineReply(embed)
                  .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    }
  }
}