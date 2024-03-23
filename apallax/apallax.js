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

const Apallax = {
    components: {
        Img, Headline, DownloadLink,
        ScriptImport, Div, Subtitle,
        HeadlineWithLogo, Link, Break,
        StyleSheet, Icon, LinkElement,
        Css, JavaScript
    },

    addComponent: function (name, component) {
        this.components[name] = component;
    },

    component: function (name, props, children) {
        const component = this.components[name];
        if (!component) throw new Error(`Component ${name} not found...`);

        const instance = new component(props, children);
        return instance.render();
    },

    printComponents: function () {
        console.log(this.components);
    },

    mountComponent: function (component, container) {
        container.innerHTML = component;
    },

    render: function (componentName, props, children, containerId) {
        const component = this.component(componentName, props, children);
        const container = document.getElementById(containerId);
        if (!container) throw new Error(`Can't find container with ID ${containerId}...`);

        this.mountComponent(component, container);
    }
};

export { Apallax };
