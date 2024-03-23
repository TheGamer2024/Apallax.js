import { Component } from "../component.js";

export class Div extends Component {
    render() {
        return `<div class="${this.props.classes || ''}">${this.props.innerHTML || ''}</div>`;
    }
}