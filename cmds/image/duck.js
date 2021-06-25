const Discord = require('discord.js')

module.exports = {
	name: 'duck',
	description: 'The cutest ducky I have seen!',
	cooldown: 4,
	category: "image",
    aliases: ["honk","goose", "bird"],
  slash: true,
  run: async(client, slash, message, args) => {
    const fetch = require("node-fetch")
		var json = await (await fetch("https://random-d.uk/api/v2/random")).json();
		if(!json.url) return;
      if(message) {
    var embed = new Discord.MessageEmbed()
    .setImage(json.url)
    .setColor('#e54918')
    .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
 message.inlineReply(embed)
 .catch(error =>
    message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
);
}
var duck = new Discord.MessageEmbed()
.setImage(json.url)
.setColor('#e54918')
.setFooter(`karot.xyz`);

 return duck 
  }}