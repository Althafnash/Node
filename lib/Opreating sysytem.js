import chalk from "chalk";
import inquirer from "inquirer"
import os from 'node:os'

export async function system() {
    const answer = await inquirer.prompt({
        name: "command",
        type: "input",
        message : "OS information"
    });
    const command = answer.command;
    if(command == "cpu"){
       const cpu = os.cpus()
       console.log("Your CPU information  : " )
       console.log(cpu)
    }
    else if(command == "host"){
       const host = os.hostname()
       console.log("HostName  : " )
       console.log(host)
    }
    else if(command == "network"){
       const Network = os.networkInterfaces()
       console.log("Network information  : " )
       console.log(Network)
    }
    else if(command == "user"){
      const User = os.userInfo()
      console.log("User information  : " )
      console.log(User)
    }
    else if(command == "version"){
      const Version = os.version()
      console.log("OS Version  : " )
      console.log(Version)
    }
    else if(command == "memory"){
      const mem = os.freemem()
      console.log("Your Remaming memeory  : " )
      console.log(chalk.white(mem))
    }
    else if(command == "Dir"){
      const Dir = os.homedir()
      console.log("Your HomeDir information  : " )
      console.log(Dir)
   }
   else if(command == "type"){
    const type = os.type()
    console.log("OS type  : " )
    console.log(type)
  }
}