import { Component } from "../component.js";

export class LinkElement extends Component {
    render() {
        return `<link rel="${this.props.rel}" type="${this.props.type || ''}" href="${this.props.href || ''} />"`;
    }
}