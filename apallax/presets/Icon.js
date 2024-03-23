import { Component } from "../component.js";

export class Icon extends Component {
    render() {
        return `<link rel="icon" type="image/x-code" href="${this.props.href || ''}" />`;
    }
}