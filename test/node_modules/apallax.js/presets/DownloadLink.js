import { Component } from "../component.js";

export class DownloadLink extends Component {
    render() {
        return `<a id="${this.props.id || ''}" href="${this.props.href || ''}" class="hidden"
         target="_blank">I am just for downloading.</a>`;
    }
}