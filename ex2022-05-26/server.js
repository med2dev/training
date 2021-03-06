const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')


const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/'){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (page == '/otherpage') {
        fs.readFile('/otherpage.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    } else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
            }
        })
    }
})


// }else if (page == '/js/main.js'){
//     fs.readFile()
//     //
// }
