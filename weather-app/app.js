const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  console.log(process.argv[2]);
  geoCode(address, (error, { long, lati, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(long, lati, (error, { temperature }) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(temperature);
    });
  });
}
