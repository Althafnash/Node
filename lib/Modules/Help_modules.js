import chalk from "chalk";

export async function Help_os() {
    console.log(chalk.red("======================================================================="))
    console.log(chalk.red("======================================================================="))
    console.log(chalk.white("Help--Deck"));
    console.log(chalk.red("======================================================================="))
    console.log(chalk.white("OS Commands :"));
    console.log(chalk.white("To accesses the OS toolkit : Type os when you start the app :"));
    console.log(chalk.red("======================================================================="))
    console.log(chalk.white("cpu          == shows information about your computer CPU "));
    console.log(chalk.white("host         == show the HostName "));
    console.log(chalk.white("memory       == show the free memeory avaliable "));
    console.log(chalk.white("version      == show the version of the computer "));
    console.log(chalk.white("user         == show the active user"));
    console.log(chalk.white("Dir          == show the home derictory "));
    console.log(chalk.white("type         == show the type of computer "));
    console.log(chalk.white("network      == show the networks in the computer "));
    console.log(chalk.white("user         == Show information about the user  "));
    console.log(chalk.white("version      == Show windows version "))
    console.log(chalk.white("memory       == Show memory capcity "))
    console.log(chalk.white("Dir          == Show home dierictory "))
    console.log(chalk.white("type         == show the os type"))
    console.log(chalk.white("eol          == The operating system-specific end-of-line marker"))
    console.log(chalk.white("interface    == The Machines Network Ineterfaces"))
    console.log(chalk.white("platform     == Returns a string identifying the operating system platform for which the Node.js binary was compiled"))
    console.log(chalk.white("release      == Returns the operating system as a string"))
    console.log(chalk.white("tempdir      == Returns the operating system's default directory for temporary files as a string"))
    console.log(chalk.white("toalmem      == Returns the total amount of system memory in bytes as an integer"))
    console.log(chalk.white("uptime       == Returns the system uptime in number of seconds."))
}

