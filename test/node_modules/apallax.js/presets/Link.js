import { Component } from "../component.js";

export class Link extends Component {
    render() {
        return `<a href="${this.props.href || ''}" class="${this.props.classes || ''}"
         target="${this.props.target || '_self'}">${this.props.text}</a>`;
    }
}