// main.js

const component = document.createElement('script');
component.src = './atomic/component.js';
component.type = 'module';
component.defer = false;
document.body.appendChild(component);

// const presets = document.createElement('script');
// presets.src = './atomic/presets.js';
// presets.type = 'module';
// presets.defer = false;
// document.body.appendChild(presets);

const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = '../atomic/atomic.css';
document.head.appendChild(css);

const app = document.createElement('script');
app.src = 'app.js';
app.type = 'module';
app.defer = false;
document.body.appendChild(app);