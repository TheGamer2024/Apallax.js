#!/usr/bin/env node

// Require any modules you need
const fs = require('fs');
const readline = require('readline');

// Main function to create the Apallax.js app
function createApallaxApp() {
    let app = {}
    let code = {
        html: '',
        css: ``,
        app: ''
    }

    let justError = '';

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    new Promise((resolve, reject) => {
        rl.question('What is the name of your app? ', (answer) => {
            app.name = answer;
            code.html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${app.name}</title>
        <link rel="stylesheet" href="style.css">
        <script type="module" src="components/app.js"></script>
        <script defer src="main.js"></script>
    </head>
    <body id="apallax-root">
        
    </body>
</html>`;

            code.app = `import { Apallax } from 'https://cdn.jsdelivr.net/npm/apallax.js@latest/apallax.js';
import { Component } from 'https://cdn.jsdelivr.net/npm/apallax.js@latest/component.js';
            
class App extends Component {
    render() {
        return "Hello ${app.name}!";
    }
}

Apallax.addComponent('App', App);
Apallax.render('App', null, null, 'apallax-root');`

            rl.close();
            resolve('Creating Apallax.js app...');
        });


    }).then(() => {
        fs.mkdir('./components', (err) => { justError = err });
        fs.writeFileSync('./index.html', code.html, (err) => { justError = err });
        fs.writeFileSync('./style.css', code.css, (err) => { justError = err });
        fs.writeFileSync('./components/app.js', code.app, (err) => { justError = err });
        fs.writeFileSync('./main.js', `alert('This is ' + ${"'" + app.name + "'"})`, (err) => { justError = err });
        // fs.writeFileSync('./', code., (err) => { justError = err });
    });
}

// Check if the script is executed directly or required as a module
if (require.main === module) {
    // If the script is executed directly, call the createApallaxApp function
    createApallaxApp();
}