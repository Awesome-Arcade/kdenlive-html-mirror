const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

<<<<<<< HEAD
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
=======
//create a server object:
http.createServer(function 
  (req, res) {
  res.write('Hello World!'); //write a response to the 
  client
  res.end(); //end the response
}).listen(8080);
>>>>>>> c3193cdbdff680ff73dee9fa955bbbbf20830ee7
