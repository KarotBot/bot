const Discord = require('discord.js')

module.exports = {
	name: 'roblox',
	description: 'The blox',
	cooldown: 4,
	category: "image",
    aliases: ["rblx", "rb", "ro", "blox"],
  slash: false,
  run: async(client, slash, message, args) => {
      if(message) {
        const subReddits = ["roblox"];
        const rmeme = subReddits[Math.floor(Math.random() * subReddits.length)];

       const fetch = require('node-fetch');
       let data = await (await fetch('https://www.reddit.com/r/'+rmeme+'.json')).json();
    
       let posts = data.data.children.filter((v) => v.data.url.startsWith('https://i.') && v.data.over_18 === false);
       let post = posts[Math.floor(Math.random() * posts.length)].data;

    var embed = new Discord.MessageEmbed()
    .setImage(post.url)
    .setColor('#e54918')
    .setURL(`https://www.reddit.com${post.permalink}`)
    .setTitle(post.title)
    .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
 message.inlineReply(embed)
 .catch(error =>
    message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
);
}
  }}