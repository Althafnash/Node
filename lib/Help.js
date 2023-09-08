import { Help_os } from "./Help_modules.js";
import inquirer from "inquirer";
import  chalk  from "chalk";

export async function Help() {
    const answer = await inquirer.prompt({
        name: "command",
        type: "input",
        message: chalk.white("command : "),
    });
    const command = answer.command;
    if (command == "os"){
        Help_os()
    }
}