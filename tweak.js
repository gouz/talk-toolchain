const fs = require("fs");
const file = "dist/index.html";
fs.readFile(file, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(
    /<\/body>/g,
    `
      <script src="gamepad.js"></script>
      <script src="colors.js"></script>
      <script src="socket.io/socket.io.js"></script>
      <script src="node_modules/reveal-notes-server/client.js"></script>
      </body>
    `
  );

  fs.writeFile(file, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

// copy files & directories

fs.cpSync(
  "./node_modules/reveal-notes-server/client.js",
  "./dist/node_modules/reveal-notes-server/client.js"
);

const constants = ["reveal.js", "favicon.ico", "gamepad.js", "colors.js"];

constants.forEach((fileOrDir) => {
  fs.cpSync(`./public/${fileOrDir}`, `./dist/${fileOrDir}`, {
    recursive: true,
  });
});

fs.cpSync(`./presentation/assets`, `./dist/assets`, {
  recursive: true,
});
