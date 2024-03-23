import { Component } from "../component.js";

export class JavaScript extends Component {
    render() {
        return `<script type="module">
            ${this.props.javascript}
        </script>`;
    }
}