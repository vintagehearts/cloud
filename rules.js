const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rules')
    .setDescription(`the rules for cloud's server`),
    async execute(interaction) {

        const embed = new EmbedBuilder()
        .setColor('#C9E1FF')
        .addFields(
            {name:'rules', value:"☆ follow [discord tos](https://discord.com/terms)\n☆ be freaking poggers\n☆ maybe more rules later idk", inline: true},
            )

            await interaction.reply({embeds: [embed] })
        
    }
}