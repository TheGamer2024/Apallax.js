import { Component } from "../component.js";

export class Img extends Component {
    render() {
        return `<img src="${this.props.src || ''}" class="${this.props.classes || ''}" />`;
    }
}