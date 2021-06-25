const { readdirSync }= require("fs");
const { Color } = require("gcommands")

const ascii = require("ascii-table");

let table = new ascii("Events");
table.setHeading("Event", "Loading");
module.exports = (client) => {
    readdirSync("./events").forEach(dir => {
        const events = readdirSync(`./events/`).filter(file => file.endsWith(".js"));

        for (let file of events) {
            let pull = require(`../events/${file}`);

            if (pull.name) {
              console.log(new Color("&e[Karot Event] &aLoaded &3-> &d" + pull.name).getText({json:false}))
                client.events.set(pull.name, pull);
            }
        }
    });
}
