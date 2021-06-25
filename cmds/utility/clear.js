module.exports = {
    name: 'clear',
    description: 'Deletes (???) your messages :D',
    category: "utility",
    slash: false,
    cooldown: 5,
    aliases: ["bulk", "delete", "bulkdelete", "purge", "bulkclear", "bd", "bc", "nuke"],
    userRequiredPermissions: "MANAGE_MESSAGES",
    run: async(client, slash, message, args) => {

        if(!args[0]) {
            return message.inlineReply('<:kt_stare:822467970382692382> You **must** specify the number of messages you want me to delete!')
        }

        if(args[1]) {
            return message.inlineReply(`That's not a number dummy! <:kekega:822475395281715250>`)
        }

        if(args[0]) {
            message.delete()
        }

        message.channel.bulkDelete(args[0]).then(() => {
            message.reply(`I have deleted **${args[0]}** messages. <:kt_job:822478953939599390>`)
        }).catch(error => {
            message.reply("```js\n" + error + "```")
        })

    },
};