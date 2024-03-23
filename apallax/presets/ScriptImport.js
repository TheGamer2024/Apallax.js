import { Component } from "../component.js";

export class ScriptImport extends Component {
    render() {
        return `<script src="${this.props.src || ''}"></script>`;
    }
}