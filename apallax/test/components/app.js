import { Apallax } from '../../apallax.js';
import { Component } from '../../component.js';

const apallax = new Apallax;

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

apallax.addComponent('app-home', App);
apallax.render('app-home', null, null, 'apallax-root');