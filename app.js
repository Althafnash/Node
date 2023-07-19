#!/urs/bin/env node

import chalk from "chalk";
import { opreating } from "./lib/os.js";

welcome();
await opreating();


function welcome() {
    console.log(chalk.white("Hello welcome to Nash CMD "))
    console.log(chalk.white("Type Help to see all the commands "))
    console.log(chalk.white("Close the window to exit"))
}

