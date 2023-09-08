import chalk from "chalk";
import inquirer from "inquirer"
import os from 'node:os'

export async function system() {
    const answer = await inquirer.prompt({
        name: "command",
        type: "input",
        message : "OS information"
    });
    const input = answer.command;
    if(input == "cpu"){
       const cpu = os.cpus()
       console.log("Your CPU information  : " )
       console.log(cpu)
    }
    else if(input == "host"){
       const host = os.hostname()
       console.log("HostName  : " )
       console.log(host)
    }
    else if(input == "network"){
       const Network = os.networkInterfaces()
       console.log("Network information  : " )
       console.log(Network)
    }
    else if(input == "user"){
      const User = os.userInfo()
      console.log("User information  : " )
      console.log(User)
    }
    else if(input == "version"){
      const Version = os.version()
      console.log("OS Version  : " )
      console.log(Version)
    }
    else if(input == "memory"){
      const mem = os.freemem()
      console.log("Your Remaming memeory  : " )
      console.log(chalk.white(mem))
    }
    else if(input == "Dir"){
      const Dir = os.homedir()
      console.log("Your HomeDir information  : " )
      console.log(Dir)
   }
   else if(input == "type"){
      const type = os.type()
      console.log("OS type  : " )
      console.log(type)
  }
}