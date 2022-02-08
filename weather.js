const express = require("express");

const https = require("https");

const app = express();

app.get("/", function (req, res) {
console.log("Hello");
 const url ="https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&appid=e7cbe0ce76eb0b38fb6c8bc578948e94&units=metric";
 https.get(url, function (response) {
                console.log(response.statusCode);
                response.on("data", function (data) {
                //console.log(data);
                const weatherdata = JSON.parse(data);
                console.log(weatherdata);
                const lat = weatherdata.coord.lat
                const lon = weatherdata.coord.lon
                const min = weatherdata.main.temp_min
                const max = weatherdata.main.temp_max
                const des = weatherdata.weather[0].description
                const myResponse = {lat,lon,min,max,des}
                // console.log(lat);
                // console.log(lon);
                // console.log(min);
                // console.log(max);
                // console.log(des);
                console.log(JSON.stringify(weatherdata));
                //res.write("<p>The weather quite pleasant</p>");
                //res.write(`<h3>The weather in london is${weatherdata.main.feels_like} ${weatherdata.weather[0].description}  celisus</h3>`);
                res.write(myResponse)
                res.send();
                });
            });
});
app.listen(2000, function () {
  console.log("Hello, the server is running222");
});

