# Discord Bot Template
Creating a Discord Bot from scratch can be tedious. You may use this template to easily deploy discord bots.

## Quick Setup
1. Create a `.env` file in the root folder (where `package.json` is located) containing the following parameters:
```
TOKEN = INSERT_BOT_TOKEN
CLIENT_ID = INSERT_CLIENT_ID
GUILD_ID = INSERT_GUILD_ID

# If You Intend to Use a Database

LIMIT = 500
HOST = INSERT_DB_HOST
USERNAME = INSERT_DB_USERNAME
PW = INSERT_DB_PW
DB = INSERT_DB_NAME
```
2. Run `node .` in the terminal

## Creating a Command
Each command is a separate `.js` file. All of the commands are located in `./src/commands/`. You can use `sample-command.js` as a template.

1. Name your command at `setName('INSERT_COMMAND_NAME')`. This will be the one that appears when you type `/`.
2. Place your program under the `execute()` function.
3. To add choices to your slash command, refer to this [documentation](https://discordjs.guide/interactions/slash-commands.html#choices).

## Reminders
- This template is used only for custom discord bots for a specific Discord Server. While you may use this for a bot that runs in multiple servers, just make sure to handle the CronJob Handler (or delete it instead).
