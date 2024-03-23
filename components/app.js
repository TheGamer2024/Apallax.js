// Import Apallax
import { Apallax } from '../apallax/apallax.js';
import { Component } from '../apallax/component.js';


// Import your components here with import { NAME } from './NAME.js' and add your
// components here with Apallax.addComponent('NAME', ClassName);
import { Hello } from './Hello.js';
Apallax.addComponent('Hello', Hello);

// Adding the App component(the App component is the component that creates your site)

class App extends Component {
    render() {
        return `
        <!-- Apallax.js code -->

        <!-- Your code here -->
        <!-- Add a component with Apallax.component('NAME', { PROPS }) as a variable 
        ($ {Apallax.component('NAME', { PROPS })} without the space between $ and {}) -->
        ${Apallax.component('Hello')}

        <!-- This code was generated with Apallax.js -->
        `;
    }
}

// Add the App component
Apallax.addComponent('App', App);

// Render the App component in a container with id apallax-root
Apallax.renderToHTML('App', null, null, 'apallax-root');