const http = require("http");
const url = require("url");

const server = http.createServer();

const set_response = (response, content) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write(content);
};

server.on("request", (request, response) => {
  let path = url.parse(request.url).pathname;
  console.log(path);

  if (path === "/") {
    set_response(response, "Hello world");
  } else if (path === "/about") {
    set_response(response, "Created by VIVES peoples");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Error page");
  }
  response.end();
});

server.listen(3000, () => {
  console.log("Node server created at port 3000");
});
