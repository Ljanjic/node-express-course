const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Type something to see what gonna be.";
let backgroundColor = "beige";
let textColor = "black";
////<input type="color" name="color"></input>

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style="background-color: ${backgroundColor}">
  <form method="POST">
  <input name="item" placeholder="Type here"></input>
  <br>
  <input type="text" name="color" placeholder="Enter a color"></input>
  <button type="submit">Submit</button>
  </form>
  <p style="color: ${textColor}"><b>${item}</b></p>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["item"]) {
        item = body["item"];
      } else {
        item = "Nothing was entered.";
      }
      if(body["color"]){
        const color = body["color"].toLowerCase();
        if (color === "blue"){
          textColor = "blue";
        } else {
          textColor = "black";
        }
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
console.log("This comment should restart the Program by Nodemon because this file is changed.");
server.on('request', (req) => {
  console.log("event received: ", req.method, req.url)
  })

console.log('Added text into prompter.js')