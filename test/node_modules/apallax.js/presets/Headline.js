import { Component } from "../component.js";

export class Headline extends Component {
    render() {
        return `<h1 class="${this.props.classes || ''}">${this.props.text}</h1>`;
    }
}