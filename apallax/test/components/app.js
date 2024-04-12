import { Apallax } from '../../apallax.js';
import { Component } from '../../component.js';

class Test extends Component {
    render() {
        return `
            <h1>${this.props.title}</h1>
        `;
    }
}

class App extends Component {
    render() {
        return `
            <Test title="df"></Test>
        `;
    }
}

Apallax.addComponent('App', App);
Apallax.render('App', null, null, 'apallax-root');