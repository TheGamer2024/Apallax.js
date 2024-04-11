// apallax.js

import { Img } from "./presets/Img.js";
import { Headline } from "./presets/Headline.js";
import { DownloadLink } from "./presets/DownloadLink.js";
import { ScriptImport } from "./presets/ScriptImport.js";
import { Div } from "./presets/Div.js";
import { Subtitle } from "./presets/Subtitle.js";
import { HeadlineWithLogo } from "./presets/HeadlineWithLogo.js";
import { Link } from "./presets/Link.js";
import { Break } from "./presets/Break.js";
import { StyleSheet } from "./presets/StyleSheet.js";
import { Icon } from "./presets/Icon.js";
import { LinkElement } from "./presets/LinkElement.js";
import { Css } from "./presets/Css.js";
import { JavaScript } from './presets/JavaScript.js';
import { Bootstrap } from "./presets/Bootstrap.js";
import { Mdl } from './presets/Mdl.js';

class Apallax {
    constructor() {
        this.components = {
            Img, Headline, DownloadLink,
            ScriptImport, Div, Subtitle,
            HeadlineWithLogo, Link, Break,
            StyleSheet, Icon, LinkElement,
            Css, JavaScript, Bootstrap,
            Mdl
        };

        this.customTags = new Set();
    }

    addComponent(name, component) {
        this.components[name] = component;
        this.customTags.add(name);
        this.defineCustomElements();
    }

    // component: function (name, props, children) {
    //     const component = this.components[name];
    //     if (!component) throw new Error(`Component ${name} not found...`);

    //     const instance = new component(props, children);
    //     return instance.render();
    // }

    formatProps(props) {
        return Object.entries(props || {})
            .map(([key, value]) => `${key}="${value}"`)
            .join(' ');
    }

    component(name, props) {
        const component = this.components[name];
        if (!component) throw new Error(`Component ${name} not found`);

        const htmlTag = `<${name} ${this.formatProps(props)}></${name}>`;
        return htmlTag;
    }

    defineCustomElements() {
        this.customTags.forEach(tagName => {
            customElements.define(tagName, class extends HTMLElement {
                constructor() {
                    super();
                    const props = {};
                    for (const { name, value } of this.attributes) {
                        props[name] = value;
                    }
                    const componentHTML = this.component(tagName, props);
                    this.innerHTML = componentHTML;
                }
            });
        });
    }

    printComponents() {
        console.log(this.components);
    }

    mountComponent(component, container) {
        container.innerHTML = component;
    }

    render(componentName, props, children, containerId) {
        const component = this.component(componentName, props, children);
        const container = document.getElementById(containerId);
        if (!container) throw new Error(`Can't find container with ID ${containerId}...`);

        this.mountComponent(component, container);
    }
}

export { Apallax };
