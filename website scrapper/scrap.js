const { cheerio } = require('cheerio')
var jar;

function getJar() {
    if (jar)
        return jar;
    else {
        jar = request.jar();
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        return jar;
    }
}

function setJar(jarParam) {
    jar = jarParam;
}
var request = require("request").defaults({
    jar: jar
});
setJar(request.jar());

function getToken() {
    var options = {
        method: 'GET',
        followAllRedirects: true,
        url: 'https://app.hackthenorth.com',
        headers: {
            'cache-control': 'no-cache'
        },
        jar: getJar()
    };
    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        console.log("Get website finish: " + response.statusCode)
        console.log("Jar =====")
        console.log(jar)
    });
}

getToken()