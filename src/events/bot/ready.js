const { InteractionType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder, ModalBuilder, TextInputBuilder, ChannelSelectMenuBuilder, ChannelType } = require("discord.js");


module.exports = {
    name:"clientReady",
    run:async(client) => {
        console.clear();
        console.log("\n");
        console.log('\x1b[37m%s\x1b[0m', '> Desenvolvido por @whitex0424 <');
        console.log('\x1b[37m%s\x1b[0m', `> Estou online em ${client.user.username} <`);
        console.log('\x1b[37m%s\x1b[0m', `> Estou em ${client.guilds.cache.size} Servidores <`);
        console.log('\x1b[37m%s\x1b[0m', `> Tenho acesso ${client.users.cache.size} Usuários <`);
        console.log('\x1b[37m%s\x1b[0m', `1.0.0`);
        
    }
}
