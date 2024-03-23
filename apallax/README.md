# What is Apallax.js?

Apallax.js is a simple JavaScript framework you can create websites with code thats a bit similar to react.

# Why Apallax.js?

Apallax.js has already preseted components that you can use directly in your code. <br>
Apallax.js is very easy to use.

# Documentation

To create a website with Apallax.js you need to do the following steps: <br>

1. Install Apallax.js with `npm i apallax.js` <br>
2. Create a file named `index.html` in the root directory of your site <br>
3. Give the body the id `apallax-root` <br>
4. Create a file named app.js <br>
5. Add this script tag to index.html: `<script src="./apallax/main.js" defer></script>` <br>
6. Import Apallax.js in your app.js file `import { Apallax } from './apallax/apallax.js';` <br>
7. Import Apallax.js component in your app.js file `import { Component } from './apallax/component.js;'` <br>
8. Add your components <br>
9. Register your components with `Apallax.addComponent('THE COMPONENT NAME FOR APALLAX', The Component);` <br>
10. Create the Main/App component <br>
11. Add the Main/App component with `Apallax.addComponent('Main/App', Main/App);` <br>
12. Render site with `Apallax.render('Main/App', null, null, 'apallax-root');`
