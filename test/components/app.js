import { Apallax } from 'https://cdn.jsdelivr.net/npm/apallax.js@latest/apallax.js';
import { Component } from 'https://cdn.jsdelivr.net/npm/apallax.js@latest/component.js';

class App extends Component {
    render() {
        return `
            ${Apallax.component('Bootstrap')}
            ${Apallax.component('Headline', { text: 'Hello world!' })}
            ${Apallax.component('Subtitle', { text: 'I am Apallax.js' })}
        `;
    }
}

Apallax.addComponent('App', App);
Apallax.render('App', null, null, 'apallax-root');