const axios = require("axios");
axios
  .get("https://api.github.com/users")
  .then((response) => {
    let users = response.data;
    users.forEach((user) => {
        console.log(user);
    });
    
    
  })
  .catch((err) => console.error(err));