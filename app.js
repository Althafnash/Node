#!/urs/bin/env node

import  inquirer  from "inquirer";
import  chalk  from "chalk"
import { Help } from "./lib/Help.js"
import {OS} from "./lib/Opreating sysytem.js";

while(true) {
    welcome();
    const answer = await inquirer.prompt({
        name: "command",
        type: "input",
        message: chalk.white("command : "),
    });
    const command = answer.command;
    if(command == "os"){
        console.log(chalk.green("Opreating System Information : "))
        await OS();
    } 
    else if(command == "help"){
        console.log(chalk.green("Help_--_Deck"));
        await Help()
    }
    else if(command == "commands"){
        console.log(chalk.green("======================================================"))
        console.log(chalk.green(" help -- The Help_Deck"))
        console.log(chalk.green(" os   -- opreating system information"))
        console.log(chalk.green("======================================================"))
    }else {
        break
    }
}
   
 function welcome() {
        console.log(chalk.white("Hello welcome to Nash CMD "))
        console.log(chalk.red("Type commands to see all the commands "))
        console.log(chalk.green("Close the window to exit"))
    }
