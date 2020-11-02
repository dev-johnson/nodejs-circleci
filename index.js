const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res, next) => {
  res.send('Status ok');
});

app.listen(port, err => {
  if (err) console.log(err);
  console.log(`Server listening on port ${port} in env`);
});
