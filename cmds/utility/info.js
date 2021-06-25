const Discord = require("discord.js")
const os = require("os")

module.exports = {
  name: 'info',
  description: 'Gives you information about the bot',
  category: "utility",
  aliases: ["stats", "botstats", "botinfo"],
  cooldown: 3,
  run: async(client, slash, message, args) => {
    const guildstotal = await client.shard.fetchClientValues('guilds.cache.size')

    if (message) {
    var in_prefix = await client.dispatcher.getGuildPrefix(message.guild.id);
    const embed = new Discord.MessageEmbed()
    .setColor('#e54918')
    .setTitle('Karot')
      .addFields(
          { name: 'Prefix:', value: `${in_prefix}`, inline: true },
          { name: 'Shards:', value: `${client.shard.count}`, inline: true },
          { name: 'This shard:', value: `${message.guild.shardID}`, inline: true },
          { name: 'Guilds:', value: `${guildstotal.reduce((acc, guildCount) => acc + guildCount, 0)}`, inline: true },
          { name: 'Guilds (Shard):', value: `${client.guilds.cache.size}`, inline: true },
          { name: 'Ping:', value: `${Date.now() - message.createdTimestamp}ms`, inline: true },
          { name: 'RAM Usage (Shard):', value: `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, inline: true },
                    { name: 'Links', value: '[Support server](https://discord.com/invite/9Byp7mWfMF) - [Add the Bot](https://invite.karot.xyz) - [Website](https://karot.xyz) - [GitHub](https://github.com/KarotBot)'},
        )
            .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
message.inlineReply(embed)
            .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
      }

    const embed = new Discord.MessageEmbed()
    .setColor('#e54918')
    .setTitle('Karot')
      .addFields(
        { name: 'Shards:', value: `${client.shard.count}`, inline: true },
        { name: 'Guilds:', value: `${guildstotal.reduce((acc, guildCount) => acc + guildCount, 0)}`, inline: true },
        { name: 'Guilds (Shard):', value: `${client.guilds.cache.size}`, inline: true },
        { name: 'Ping:', value: `${client.ws.ping}ms`, inline: true },
        { name: 'RAM Usage (Shard):', value: `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, inline: true },
                  { name: 'Links', value: '[Support server](https://discord.com/invite/9Byp7mWfMF) - [Add the Bot](https://discord.com/oauth2/authorize?client_id=822391645697212416&permissions=322632&redirect_uri=https://karot.xyz/hi.html&response_type=code&scope=bot%20applications.commands) - [Website](https://karot.xyz) - [GitHub](https://github.com/KarotBot)'},
      )

        return embed


}}