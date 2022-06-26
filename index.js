import express from 'express';
import fetch from "node-fetch";
const app = express();



app.get("/", (request, response) => {
    const code = request.query.code;

    fetch("https://api.nexchange.io/en/api/v1/currency/")
    .then((cryptoData) =>cryptoData.json())
    .then(cryptoData => {
            return code ?
                cryptoData.filter(crypto => crypto.code == code) :
                cryptoData;
    })
    .then(cryptoData => {
            response.render('home', { cryptoData: cryptoData });
        })
    .catch(err => console.log(err))

});



app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.set("view engine", "ejs");
