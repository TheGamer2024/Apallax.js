import { Component } from "../component.js";

export class Subtitle extends Component {
    render() {
        return `<h2 class="${this.props.classes || ''}">${this.props.text || 'No text defined'}</h2>`;
    }
}