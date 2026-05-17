const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;

const server = http.createServer((req, res) => {

    console.log(req.method, req.url);

    // Serve CSS File
    if (req.url === "/style.css") {

        const cssPath = path.join(__dirname, "public", "style.css");

        fs.readFile(cssPath, (err, data) => {

            if (err) {
                res.writeHead(500);
                res.end("Error loading CSS");
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css"
                });

                res.end(data);
            }
        });
    }

    // Serve Image
    else if (req.url === "/node.png") {

        const imagePath = path.join(__dirname, "public", "node.png");

        fs.readFile(imagePath, (err, data) => {

            if (err) {
                res.writeHead(500);
                res.end("Error loading image");
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/png"
                });

                res.end(data);
            }
        });
    }
    // Serve Coding Image
else if (req.url === "/coding.png") {

    const imagePath = path.join(__dirname, "public", "coding.png");

    fs.readFile(imagePath, (err, data) => {

        if (err) {
            res.writeHead(500);
            res.end("Error loading image");
        } else {
            res.writeHead(200, {
                "Content-Type": "image/png"
            });

            res.end(data);
        }
    });
}

    // HOME PAGE
    else if (req.url === "/" || req.url === "/home") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
                <link rel="stylesheet" href="/style.css">
            </head>

            <body>

                <nav>
                    <h2>Node.js Server</h2>

                    <div>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                    </div>
                </nav>

                <div class="container">

                    <img src="/node.png" alt="Node Logo">
                    <img class="coding-image" src="/coding.png" alt="Coding Image">

                    <h1>Welcome to Home Page</h1>

                    <p>
                        This server is created using 
                        Pure Node.js HTTP Module
                    </p>

                    <button>
                        Learn Node.js
                    </button>

                </div>

            </body>
            </html>
        `);

        res.end();
    }

    // ABOUT PAGE
    else if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Page</title>
                <link rel="stylesheet" href="/style.css">
            </head>

            <body>

                <nav>
                    <h2>Node.js Server</h2>

                    <div>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                    </div>
                </nav>

                <div class="container">

                    <h1>About This Project</h1>

                    <p>
                        This project demonstrates routing,
                        static file serving, CSS integration,
                        and image handling using Node.js.
                    </p>

                </div>

            </body>
            </html>
        `);

        res.end();
    }

    // 404 PAGE
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404 Error</title>
                <link rel="stylesheet" href="/style.css">
            </head>

            <body>

                <div class="container">

                    <h1>404 - Page Not Found</h1>

                    <p>
                        The page you are looking for does not exist.
                    </p>

                </div>

            </body>
            </html>
        `);

        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});