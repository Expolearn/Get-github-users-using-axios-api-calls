const axios = require("axios");
axios.get("https://api.github.com/users").then((response) => {
    let users = response.data;
    users.forEach((user) => {
        console.log(user);
    });
    
    
  }).catch((invalid) => {
    console.error(invalid);
  });