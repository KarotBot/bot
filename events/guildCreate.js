const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "guildCreate",
    run: async (guild) => {
		const hichannel = guild.channels.cache.filter(channel => channel.type == "text");
        const blacklistTable = new db.table("blacklist");
    	if (blacklistTable.all().filter(datatable => datatable.ID === "guilds" && datatable.data.blacklisted && datatable.data.blacklisted.includes(guild.id)).length > 0) {
    		return guild.leave()
    	}
		var embed = new Discord.MessageEmbed()
        .setColor("#e54918")
        .setTitle('Thanks for adding me!')
        .setDescription('<:kt_hey:822468640103202858> **Henlo, my name is Karot!** \nThanks for adding me to your perfect server! <:kekega:822475395281715250> \nTo get started, use the `+help` command to show you all of the pog commands. `🎉`\n\n If you ever need help, check out our [Docs](https://docs.karot.xyz) or join our [Support Server](https://discord.com/invite/PSC4CgkuMS)!')
        .addField('Important Links', '[Support Server](https://discord.com/invite/PSC4CgkuMS) - The server where you can get help for the bot with a lovely community\n[Docs](https://docs.karot.xyz) - The 101 guide to using Karot\n[Website](https://karot.xyz) - Learn more about the bot\n[Report a user](https://ywo68knz7bv.typeform.com/to/I1POZg7I) - Report a user in your server spamming or abusing the bot\n[Appeals](https://ywo68knz7bv.typeform.com/to/n3GoLdHY) - Use this to appeal if you ever get bonked by the ban hammer')
        .setFooter(`karot.xyz`);
		hichannel.first().send(embed);
    }
}
