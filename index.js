const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve(`Here is your fake data from ${url}`);
      } else {
        reject("Request Error!");
      }
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("Done with request!");
    console.log("data is:", data);
  })
  .catch((err) => {
    console.log("Error!", err);
  });
