import { Component } from "../component.js";

export class StyleSheet extends Component {
    render() {
        return `<link rel="stylesheet" href="${this.props.href || ''}" />`;
    }
}