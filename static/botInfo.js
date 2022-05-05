fetch('http://localhost:4444/api/bot/info')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  })