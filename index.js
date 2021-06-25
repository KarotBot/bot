require('dotenv').config()
const {ShardingManager} = require('discord.js');
const manager = new ShardingManager('./bot.js', {token: process.env.TOKEN})
const shardcount = 2
const express = require('express');
const app = express()

const AutoPoster = require('topgg-autoposter')

const ap = AutoPoster(process.env.TOPGG_TOKEN, manager)

ap.on('posted', () => {
    console.log('Posted the epical stats to Top.gg!')
})

manager.on("shardCreate", shard => {
    console.log(`I've launched the epical shard ${shard.id}.`)
})

manager.spawn(shardcount, 10000);

app.get('/api', async (req, res) => {
    const guilds = await manager.fetchClientValues('guilds.cache.size')
    const users = await manager.fetchClientValues('users.cache.size')
    const channels = await manager.fetchClientValues('channels.cache.size')
    const uptime = await manager.fetchClientValues('uptime')
    const ping = await manager.fetchClientValues('ws.ping')
    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        status: '200',
        uptime: `${uptime}`,
        ws_ping: `${ping}`,
        guilds_total: `${guilds.reduce((prev, val) => prev + val, 0)}`,
        guilds: `${guilds}`,
        users_total: `${users.reduce((prev, val) => prev + val, 0)}`,
        users: `${users}`,
        channels_total: `${channels.reduce((prev, val) => prev + val, 0)}`,
        channels: `${channels}`,
    })})

app.listen('6969');