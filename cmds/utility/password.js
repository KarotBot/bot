const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
  name: 'password',
  description: 'Gives you a nice poggers secure password',
  aliases: ["pass","passwd", "secure"],
  cooldown: 5,
  category: "utility",
  slash: false,
  run: async(client, slash, message,args) => {
    message.delete();
    const requester = message.author

    requester.send(`<:kt_job:822478953939599390> **Your new Secure Password:**\n||${Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)}||`).then(msg => msg.delete({timeout: 10000}))
             .catch(error =>
          message.Reply('**I could not DM you the password!** Make sure you have your DMs turned on and try again!').then(msg => msg.delete({timeout: 5000}))
      );
  }
}