import inquirer from 'inquirer';
import { 
    CPU_funcation 
  , Host_funcation 
  , Network_funcation 
  , users_funcation 
  , Version_funcation 
  , Memory_funcation 
  , type_funcation 
  , EOL_funcation
  , NewtworkInterfaces_funcation
  , Platform_funcation
  , Realese_funcation
  , TempDir_funcation
  , TotalMemory_funcation
  , Uptime_funcation
} from "./Modules/OS_modules.js";

export async function OS() {
  const answer = await inquirer.prompt({
    name: "command",
    type: "input",
    message : "OS information"
  });
  const input = answer.command;

  if(input == "cpu")
  {
    console.log("============================================================")
    CPU_funcation() 
    console.log("============================================================")
  } else if (input == "host") 
  {
    console.log("============================================================")
    Host_funcation()
    console.log("============================================================")
  } 
  else if (input == "host") 
  {
    console.log("============================================================")
    Network_funcation()
    console.log("============================================================")
  }
  else if (input == "network") 
  {
    console.log("============================================================")
    Network_funcation()
    console.log("============================================================")
  }
  else if(input == "users")
  {
    console.log("============================================================")
    users_funcation()
    console.log("============================================================")
  }
  else if (input == "version") {
    console.log("============================================================")
    Version_funcation()
    console.log("============================================================")
  }
  else if(input == "memory")
  {
    console.log("============================================================")
    Memory_funcation()
    console.log("============================================================")
  } 
  else if(input == "type")
  {
    console.log("============================================================")
    type_funcation()
    console.log("============================================================")
  }
  else if(input == "eol")
  {
    console.log("============================================================")
    EOL_funcation()
    console.log("============================================================")
  }
  else if(input == "arch")
  {
    console.log("============================================================")
    arch_funcation()
    console.log("============================================================")
  }
  else if(input == "interface")
  {
    console.log("============================================================")
    NewtworkInterfaces_funcation()
    console.log("============================================================")
  }
  else if(input == "platform")
  {
    console.log("============================================================")
    Platform_funcation()
    console.log("============================================================")
  }
  else if(input == "release")
  {
    console.log("============================================================")
    Realese_funcation()
    console.log("============================================================")
  }
  else if(input == "tempdir")
  {
    console.log("============================================================")
    TempDir_funcation()
    console.log("============================================================")
  }
  else if(input == "totalmem")
  {
    console.log("============================================================")
    TotalMemory_funcation()
    console.log("============================================================")
  }
  else if(input == "uptime")
  {
    console.log("============================================================")
    Uptime_funcation()
    console.log("============================================================")
  }
}