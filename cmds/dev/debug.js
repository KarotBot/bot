const Discord = require("discord.js")
const os = require("os")

module.exports = {
  name: 'debug',
  description: 'client info',
  category: "dev",
  aliases: ["ping", "ws", "latency", "api", "ms"],
  cooldown: 3,
  slash: false,
  run: async(client, slash, message, args) => {
            message.channel.send(`⚠️ **shardID:** ${message.guild.shardID}/${client.shard.count} | 🏓 **WS:** ${client.ws.ping}ms **BOT:** ${Date.now() - message.createdTimestamp}ms`)
}}