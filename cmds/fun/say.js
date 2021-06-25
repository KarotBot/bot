module.exports = {
    name: 'say',
    description: 'Have no friends? Talk with yourself as a bot instead!',
    category: 'fun',
    slash: false,
    run: async(client, slash, message, args) => {
        if(!args[0]) {
            return message.inlineReply('<:kekega:822475395281715250> What do you want me to say?')
        }
        var stuff  = args.slice(0).join(" ");

        message.channel.send(`${stuff}\n   ~ *${message.author.tag}*`)
            .catch(error => {
            message.reply("```js\n" + error + "```")
        })
    }
}