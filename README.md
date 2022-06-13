# Discord Bot Template
Creating a Discord Bot from scratch can be tedious. We made this template for everyone to easily create and deploy customized discord bots.

## Prerequisites
1. **NodeJS and NPM** is installed in the system.
2. The Developer should know basic **Javascript.**

## Quick Setup
1. Fill up the details in the `.env` file.
2. Run `npm i` in the terminal.
3. Run `npm start` in the terminal.

## Beginner Step-by-step Setup
1. Go to https://discord.com/developers/applications and create a new Application.
2. On the Left Menu Panel, Go to "Bot", and create a new bot.
3. Again on the Left Menu Panel, Go to "OAuth2" → "URL Generator
   - Under **Scopes**, Tick the "*bot*" checkbox.
   - Under **Scopes**, Tick the "*applications.commands*" checkbox.
   - Under **Bot Permissions**, Tick the "*Adminstrator*" checkbox.
4. If you scroll down, you will see a **Generated URL** section. Copy it and paste it to your web browser's address bar. This will allow you to invite your newly created bot to your own Discord Server.
5. Going back to the program files, Fill up the details in the `.env` file.
6. Run `npm i` in the terminal.
7. Run `npm start` in the terminal.
8. Go back to your server and try to run the command `/hello`

## Creating a Command
Each command is a separate `.js` file. All of the commands are located in `./src/commands/`. You can use `hello.js` as a guide. To add choices to your slash command, refer to this [documentation](https://discordjs.guide/interactions/slash-commands.html#choices).

## Reminders
- We highly suggest to program inside `index.js` but instead create handlers for listeners for maximum organization. In our convention, we place these events in the `./src/handlers` folder (e.g. `message-create-handler.js` and `button-handler.js`)
- The `.env` file is not meant to be pushed to the remote repository. We added the file only for faster setup and straight-forward instruction.