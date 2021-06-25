const Discord = require("discord.js");
const mongoose = require("mongoose")

module.exports = {
    name: "guildDelete",
    run: async (guild) => {
                var guildSettings = require('./node_modules/gcommands/src/utils/models/guild')
    
                const settings = await guildSettings.findOne({ id: guild.id})
                if(!settings) return;
                guildSettings.findOneAndDelete({id:guild.id})
        }
    }