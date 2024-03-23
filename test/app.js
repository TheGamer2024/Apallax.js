import { Apallax } from './node_modules/apallax.js/apallax.js';
import { Component } from './node_modules/apallax.js/component.js';

class App extends Component {
    render() {
        return `<h1 style="text-align: center;">Hello</h1>`;
    }
}

Apallax.addComponent('App', App);
Apallax.render('App', null, null, 'apallax-root');