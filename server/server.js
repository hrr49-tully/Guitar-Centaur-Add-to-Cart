const app = require('./app');

const port = 3001;

console.log('your server is running');

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
