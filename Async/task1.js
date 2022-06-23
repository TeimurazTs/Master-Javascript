function send(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      if (response.status === 200) {
        resolve(response.json());
      } else {
        reject("We have error, status code: " + response.status);
      }
    });
  });
}

const url = "https://api.first.org/data/v1/countries";

send(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });