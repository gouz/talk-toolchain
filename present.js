// adaptation of reveal-notes-server

let http = require("http");
let express = require("express");
let fs = require("fs");
let mustache = require("mustache");

let app = express();
let server = http.createServer(app);
let io = require("socket.io")(server);

let opts = {
  port: 1337,
  revealDir: "dist",
  pluginDir: "node_modules/reveal-notes-server/",
};

io.on("connection", (socket) => {
  socket.on("new-subscriber", (data) => {
    socket.broadcast.emit("new-subscriber", data);
  });

  socket.on("statechanged", (data) => {
    delete data.state.overview;
    socket.broadcast.emit("statechanged", data);
  });

  socket.on("statechanged-speaker", (data) => {
    delete data.state.overview;
    socket.broadcast.emit("statechanged-speaker", data);
  });
});

app.use(express.static(opts.revealDir));

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(opts.revealDir + "/index.html").pipe(res);
});

app.get("/notes/:socketId", (req, res) => {
  fs.readFile(opts.pluginDir + "/index.html", (err, data) => {
    res.send(
      mustache.render(data.toString(), {
        socketId: req.params.socketId,
      })
    );
  });
});

app.set("port", opts.port);

server.listen(app.get("port"), function () {
  console.log("Web server listening on http://localhost:" + app.get("port"));
});
