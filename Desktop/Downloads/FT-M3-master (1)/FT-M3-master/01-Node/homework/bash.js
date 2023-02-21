//process.stdout.write("Cositas");

const commands = require("./commands");
 const print = (input) => {
    process.stdout.write( input + "\n")
    process.stdout.write ("prompt > ");
 }

process.stodout.write("prompt >");

process.stdin.on("data", (data)=> {
    let args = data.toString().trim().split(" ");
    let cmd = args.shift();
  //  process.stdout.write(cmd + "\n");
  commands[cmd] ? commands[cmd] (args, print) : print  ("command not found")
    process.stdout.write("prompt > ");

   // process.stdout.write("Comando: " + data);
});