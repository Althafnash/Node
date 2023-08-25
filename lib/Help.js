import { Help_os } from "./Help_modules.js";

function help() {
    console.log("Help -- o       ===  Operating system help cenetr ")
}


export async function Help() {
    help()
    const answer = await inquirer.prompt({
        name: "command",
        type: "input",
        message: chalk.white("command : "),
    });
    const command = answer.command;
    if (command == "Help -- o "){
        Help_os()
    }
}