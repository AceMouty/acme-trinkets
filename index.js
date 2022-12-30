const express = require("express");
const app = express();
const path = require("path");
const { data } = require("./data");

const PORT = 8080;

// set the view engine to use 'ejs'
// express docs: http://expressjs.com/en/5x/api.html#app.set

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);

app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

app.get("", (req, res) => {
  /*
  Set the route above to '/' that will render a
  'home' ejs template

  Also provide the template data. The data should
  be a **object** with the following properties and values

  - key: viewData
  - value: data
*/
});

app.get("", (req, res) => {
  /*
    Set the route above to /product/trinketId
    where `trinketId` is a route parameter.

    - the trinketId parameter comes in as a string,
    convert it to a number and save it in a variable

    - using `find` array method, loop through our data 
    and find the trinket where the trinket.id is equal to   
    our trinketId variable that we created in the previous step
    

    - render out a ejs template called `trinket` and pass it the found trinket data

    Docs: 
    MDN page for `find` array method
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

    Express docs for route params
    http://expressjs.com/en/guide/routing.html#route-parameters
  */
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
