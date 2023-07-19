import chalk from "chalk";
import inquirer from "inquirer"
import {Help} from "./Help.js"
import {system} from "./Opreating sysytem.js"


export async function opreating() {
    const answer = await inquirer.prompt({
        name: "command",
        type: "input",
        message: chalk.white("command : "),
    });
    const command = answer.command;
    if (command == "Help"){
      Help()
    }
    if (command == "os"){
      system()
    }
}


