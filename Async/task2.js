const url = "https://api.first.org/data/v1/countries";

class Countries {
  constructor(str) {
    if (typeof str !== "string") throw new TypeError("must be a string");
    this.str = str;
  }

  send(region) {
    if (typeof region !== "string") throw new TypeError("must be a string");
    return new Promise((resolve, reject) => {
      fetch(url + `?region=${region}`).then((response) => {
        if (response.status === 200) {
          resolve(
            response.json().then((response) => console.log(response.data))
          );
        } else {
          reject("We have error, status code: " + response.status);
        }
      });
    });
  }
}

const countries = new Countries(url);
countries.send("africa");

// HTML file is connected 