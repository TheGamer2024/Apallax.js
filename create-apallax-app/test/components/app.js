import { Apallax } from 'https://cdn.jsdelivr.net/npm/apallax.js@latest/apallax.js';
import { Component } from 'https://cdn.jsdelivr.net/npm/apallax.js@latest/component.js';
            
class App extends Component {
    render() {
        return "Hello Mamas Webseite!";
    }
}

Apallax.addComponent('App', App);
Apallax.render('App', null, null, 'apallax-root');