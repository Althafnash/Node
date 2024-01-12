# Node

# Node Docs
# What is this app about
An app which uses Node Modules to interact with the OS and other components (still in progress).

# How to use this app
- Step 1 -- Download the git project from GitHub
- Step 2 -- Open the project in your terminal
- Step 3 -- Navigate to the project folder
- Step 4 -- Run `node app.js`
- Step 5 -- Enjoy

# Prerequisites
- Node.js -- latest version
- Needed Libraries
  - Commander.js
    - Download Commander.js using the following command: `npm install commander`
  - Inquirer.js
    - Download Inquirer.js using the following command: `npm install inquirer`
  - Colors
    - Download Colors using the following command: `npm install colors`

# Project structure
- The code for the functionalities is in the Lib folder
- The Module folder contains the actual functions of the app
- The other files are just wrappers so I can import them and use them in the app.js file

# Functionalities
- The first is the OS functions

## OS Commands:
- To access the OS toolkit: Type "os" when you start the app
- `cpu` == shows information about your computer CPU
- `host` == show the HostName
- `memory` == show the memory information
- `network` == show the network information
- `uptime` == show the uptime of the computer
- `user` == show the user information
- `version` == show the version of the computer
- `Dir` == show the home directory
- `type` == show the type of computer
- `eol` == The operating system-specific end-of-line marker
- `interface` == The Machines Network Interfaces
- `platform` == Returns a string identifying the operating system platform for which the Node.js binary was compiled
- `release` == Returns the operating system as a string
- `tempdir` == Returns the operating system's default directory for temporary files as a string
- `toalmem` == Returns the total amount of system memory in bytes as an integer
