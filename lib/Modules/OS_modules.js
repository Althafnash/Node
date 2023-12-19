import { Command } from 'commander';
import os from "os";
const program = new Command();

export async function CPU_funcation() {
    program
        .command('CPU')
        .description('Shows your machine CPU Information')
        .action(CPU());

    function CPU() {
        const CPU = os.cpus()
        const information = CPU[0]
        console.log(information) 
    }
}

export async function Host_funcation() {
    program
        .command('Host')
        .description('Shows Host (Your) Machine Information')
        .action(Host());

    function Host() {
        const host = os.hostname()
        console.log("HostName  : " )
        console.log(host)
    }
}

export async function Network_funcation() {
    program
        .command('Network')
        .description('Shows your Machine Network information ')
        .action(Network())

    function Network() {
        const Network = os.networkInterfaces()
        console.log("Network information  : " )
        console.log(Network)
    }
}

export async function users_funcation() {
    program
        .command('users')
        .description('Shows your Machine users information ')
        .action(users())

    function users() {
        const users = os.userInfo()
        console.log("users information  : " )
        console.log(users)
    }
}

export async function Version_funcation() {
    program
        .command('Version')
        .description('Shows your Machine Version ')
        .action(Version())

    function Version() {
        const Version = os.version()
        console.log("Version : " )
        console.log(Version)
    }
}

export async function Dir_funcation() {
    program
        .command('Dir')
        .description('Shows your Machine HomeDir information ')
        .action(Dir())

    function Dir() {
        const Dir = os.homedir()
        console.log("HomeDir information  : " )
        console.log(Dir)
    }
}

export async function Memory_funcation() {
    program
        .command('Memory')
        .description('Shows your Machine Memory information ')
        .action(Memory())

    function Memory() {
        const Memory = os.freemem()
        console.log("Memory information  : " )
        console.log(Memory)
    }
}

export async function arch_funcation() {
    program
        .command('arch')
        .description('Shows your Machine OS archeitrcture information ')
        .action(arch())

    function arch() {
        const arch = os.arch()
        console.log("os archeitrcture information  : " )
        console.log(arch)
    }
}

export async function type_funcation() {
    program
        .command('type')
        .description('Shows your Machine OStype information ')
        .action(type())

    function type() {
        const type = os.type()
        console.log("OStype information  : " )
        console.log(type)
    }
}

export async function EOL_funcation() {
    program
        .command('eol')
        .description('Shows your Machine OS EOL information ')
        .action(EOL())

    function EOL() {
        const EOL = os.EOL()
        console.log("OS EOL information  : " )
        console.log(EOL)
    }
}

export async function NewtworkInterfaces_funcation() {
    program
        .command('NetworkInterafes')
        .description('Shows your Machine OS NetworkInterafes information ')
        .action(NetworkInterafes())

    function NetworkInterafes() {
        const NetworkInterafes = os.networkInterfaces()
        console.log("OS NetworkInterafes information  : " )
        console.log(NetworkInterafes)
    }
}

export async function Platform_funcation() {
    program
        .command('Platform')
        .description('Shows your Machine OS Platform information ')
        .action(Platform())

    function Platform() {
        const Platform = os.platform()
        console.log("OS Platform information  : " )
        console.log(Platform)
    }
}

export async function Realese_funcation() {
    program
        .command('Release')
        .description('Shows your Machine OS Release information ')
        .action(Release())

    function Release() {
        const Release = os.release()
        console.log("OS Release information  : " )
        console.log(Release)
    }
}

export async function TempDir_funcation() {
    program
        .command('TempDir')
        .description('Shows your Machine OS TemporayDir information ')
        .action(TempDir())

    function TempDir() {
        const TempDir = os.networkInterfaces()
        console.log("OS TempDir information  : " )
        console.log(TempDir)
    }
}

export async function TotalMemory_funcation() {
    program
        .command('TotalMemory')
        .description('Shows your Machine OS TotalMemory information ')
        .action(TotalMemory())

    function TotalMemory() {
        const TotalMemory = os.totalmem()
        console.log("OS TotalMemory information  : " )
        console.log(TotalMemory)
    }
}

export async function Uptime_funcation() {
    program
        .command('uptime')
        .description('Shows your Machine uptime information ')
        .action(uptime())

    function uptime() {
        const uptime = os.uptime()
        console.log("OS uptime information  : " )
        console.log(uptime)
    }
}