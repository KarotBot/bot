const Discord = require("discord.js")
const axios = require("axios")

module.exports = {
    name: 'dadjoke',
    description: 'That was really (un)funny man!',
    cooldown: 3,
    category: "fun",
    aliases: ["joke","dj"],
    run: async(client, slash, message, args) => {

        var buff = (await axios({
            url: new URL(`https://official-joke-api.appspot.com/random_joke`).toString(),
            responseType: "json"
        })).data;
        if(message) {
        message.inlineReply(`${buff.setup} **${buff.punchline}**`)
    }

    return `${buff.setup} **${buff.punchline}**`
     
    }
}