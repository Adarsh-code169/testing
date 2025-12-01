const express = require('express');
const app = express();
const port = 3000;

const alert = function (){
  console.log("Hi")
}

const alert2 = function(){
  console.log("hii")
}
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}   );