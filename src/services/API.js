var axios = require("axios");

export async function getCatFacts() {
  var config = {
    method: "get",
    url: "https://cat-fact.herokuapp.com/facts/random?amount=20",
    headers: {
      Cookie:
        "connect.sid=s%3AZ1IWeVaDEZ7L1RBSaJghBBgzz7HOltXW.HzbdOK%2BgoDT5bvxK7BTbs0sQP%2B0qScRmJgUz8g7w7%2BM",
    },
  };

  let result;
  await axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return result;
}
