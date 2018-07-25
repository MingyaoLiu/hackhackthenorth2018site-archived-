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
        url: 'https://app.hackthenorth.com?token=a81d3041fd73db145e977d070f8470f67bd26546b8233aa762c59a3dd58c6fc4',
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

function a(e) {
        var t = this,
            n = {};
        return Object.keys(this).forEach(function(i) {
            try {
                if ("specialHandlers" !== i && "createdAt" !== i && "updatedAt" !== i)
                    if (t.specialHandlers[i]) {
                        var a = t.specialHandlers[i](i, t[i], e),
                            c = r(a, 2),
                            s = c[0],
                            f = c[1];
                        n[s] = f
                    } else if ("object" === o(t[i]))
                    if (Array.isArray(t[i])) {
                        var l = u.underscores(i);
                        n[l] = [], t[i].forEach(function(t) {
                            n[l].push(t && t.toHackerAPIFormat ? t.toHackerAPIFormat(e) : t)
                        })
                    } else n[u.underscores(i)] = t[i] && t[i].toHackerAPIFormat ? t[i].toHackerAPIFormat(e) : t[i];
                else n[u.underscores(i)] = t[i]
            } catch (e) {}
        }), n
    }

function addUser() {
    var options = {
        method: 'POST',
        followAllRedirects: true,
        url: 'https://hackerapi.com/v2/users/',
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