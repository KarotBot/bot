module.exports = {
    name: "mcwiki",
    description: "Find something on the Minecraft wiki",
    slash: false,
    category: 'minecraft',
    run: async(client, slash, message, args) => {

            if(!args[0]) {
                return message.inlineReply('<:kt_nesuhlas:822475199755583488> Please specify what you want me to look up for you!')
            }
            message.inlineReply(`<:kt_job:822478953939599390> Here, have this: <https://minecraft.fandom.com/wiki/${args[0]}>`)
  }
};