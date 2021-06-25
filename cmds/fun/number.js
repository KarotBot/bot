const Discord = require("discord.js")

module.exports = {
    name: 'number',
    description: 'OMG What a funny number!',
    aliases: ["num","random"],
    slash: true,
    cooldown: 1,
    category: "fun",
    run: async(client, slash, message, args) => {
        if(message) {
        message.inlineReply(Math.floor(Math.random()*10001))
    }
        
        return (Math.floor(Math.random()*10001))
    }
}