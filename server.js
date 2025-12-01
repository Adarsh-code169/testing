const express = require('express');
const app = express();
const port = 3000;

const alert = function (){
  console.log("Hi")
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}   );