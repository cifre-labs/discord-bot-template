import { SlashCommandBuilder } from '@discordjs/builders';
import { successEmbed } from '../utils/embeds/general-embeds.js';

export const data = new SlashCommandBuilder()
    .setName('hello') // The name of the slash command
    .setDescription('Check if you did everything right when setting up the bot.');

export const execute = async (interaction) => {
    await interaction.reply({embeds: [successEmbed]});
}