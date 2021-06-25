const Discord = require('discord.js')

module.exports = {
  name: 'ratewaifu',
  description: 'Rates yer waifu (if you hav one)',
  cooldown: 4,
  category: "fun",
  slash: false,
  aliases: ["rw"],
  run: async(client, slash, message, args) => {
    // ported from hernikplays/m00n
    let m421 = args.join(" ");
    if (!m421) return message.inlineReply("If you don't have a waifu, I can't rate it.")
    if (m421.length > 30) return message.inlineReply(`Your waifu is too long! <:kt_pain:822491637023899678>`)
    let result = Math.floor((Math.random() * 100) + 0);

    const happyrate = new Discord.MessageEmbed()
      .setDescription(`I would give **${m421}** a ${result}/100 ❤`)
      .setColor(`GREEN`)
      .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));

    const sadembed = new Discord.MessageEmbed()
      .setDescription(`I think that ${result}/100 is a good score for **${m421}**.`)
      .setColor(`GREEN`)
      .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));

    const idkembed = new Discord.MessageEmbed()
      .setDescription(`**${m421}** deserves a ${result}/100, don't judge me.`)
      .setColor(`GREEN`)
      .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));

    const shrugembed = new Discord.MessageEmbed()
      .setDescription(`**${m421}** is a clear ${result}/100`)
      .setColor(`GREEN`)
      .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));

    const okembed = new Discord.MessageEmbed()
      .setDescription(`${result}/100 for **${m421}**`)
      .setColor(`GREEN`)
      .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));

    const thumbupembed = new Discord.MessageEmbed()
      .setDescription(`**${m421}** gets a ${result}/100. Nothing more, nothing less! 👍`)
      .setColor(`GREEN`)
      .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));

    const eyesembed = new Discord.MessageEmbed()
      .setDescription(`**${m421}** gets ${result}/100 👀`)
      .setColor(`GREEN`)
      .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));

    if (result > 90) return message.inlineReply(happyrate)
            .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    if (result < 30) return message.inlineReply(sadembed)
                .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    if (result > 40) return message.inlineReply(idkembed)
                .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    if (result > 50) return message.inlineReply(shrugembed)
                .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    if (result > 60) return message.inlineReply(okembed)
                .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    if (result > 70) return message.inlineReply(thumbupembed)
                .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
    if (result > 80) return message.inlineReply(eyesembed)
                .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
  }
} 
