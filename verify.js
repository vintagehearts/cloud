const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription(`the verify msg for cloud's server`),
    async execute(interaction) {

        const embed = new EmbedBuilder()
        .setColor('#C9E1FF')
        .addFields(
            {name:'☆ welcome to gosu', value:`hii, to gain access to the server please check out <#1067861667611951148> and read the rules there. once you understand all the rules react with the ":cloud:" at the bottom of the message, this proves you have read all the rules. reacting with the emoji below will give u access to the rest of the server. :)`},
            )

            await interaction.reply({embeds: [embed] })
        
    }
}