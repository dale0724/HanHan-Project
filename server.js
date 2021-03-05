const express = require('express')
const server = express()

/* using files inside 'assets' folder */
server.use(express.static('assets'))

/* your landing page */
server.get('/homepage.html', (req, res) => {
  res.sendFile(__dirname + '/homepage.html');
});

server.get('/teacher_1.html', (req, res) => {
  res.sendFile(__dirname + '/teacher_1.html');
});

/* your port is localhost:8000 */
const port = 8000;

server.listen(port, function() {
  console.log('server listening on port ' + port)
})