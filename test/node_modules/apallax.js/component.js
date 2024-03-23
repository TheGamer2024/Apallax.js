// component.js

class Component {
    constructor(props, children) {
        this.props = props || {};
        this.children = children || [];
    }

    render() {
        const childrenHTML = this.children.map(child => child.render()).join('');
        return `<div>${childrenHTML}</div>`;
    }
}

export { Component };
