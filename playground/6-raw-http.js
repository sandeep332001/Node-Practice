const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=3cd2cf507b1b6321b0f41af7cc49a762&query=23,82&units=f`;

http.request(url, (response) => {
  console.log(response);
});
