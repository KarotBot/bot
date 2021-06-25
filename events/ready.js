// Constants

const { GCommands, Color } = require("gcommands")
const db = require("quick.db");
const blacklistTable = new db.table("blacklist");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ready",
    run: (client) => {
        new GCommands(client, {
            cmdDir: "cmds",
            language: "english",
            unkownCommandMessage: false,
            slash: {
               slash: 'both',
               prefix: '+'
            },
            defaultCooldown: 3,
            database: {
                type: "mongodb", 
                url: process.env.MONGO
            }
    	})
        
    	client.dispatcher.addInhibitor((cmd, slash, message) => {
            if(message) {
                if (blacklistTable.all().filter(datatable => datatable.ID === "users" && datatable.data.blacklisted && datatable.data.blacklisted.includes(message.author.id)).length > 0) {
                  return false;
                }
            }
            
            if(slash) {
              if (blacklistTable.all().filter(datatable => datatable.ID === "users" && datatable.data.blacklisted && datatable.data.blacklisted.includes(slash.member.user.id)).length > 0) {
                return false;
              }
            }
        })   
        
        // Activities + Blacklisting

        const activities_list = [
            `yes`,
            `with Karots | +help`,
            `www.karot.xyz | +help`,
            ];
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
            client.user.setActivity(activities_list[index], { type: 'PLAYING' });
            client.guilds.cache.forEach(guild => {
               if (blacklistTable.all().filter(datatable => datatable.ID === "guilds" && datatable.data.blacklisted && datatable.data.blacklisted.includes(guild.id)).length > 0) {
                 try {
                   guild.leave();    
                   } catch(e) {
                     return;
                   }
               } 
            });
        }, 35000);
    }
}
