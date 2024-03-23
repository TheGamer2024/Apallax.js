import { Component } from "../component.js";

export class HeadlineWithLogo extends Component {
    render() {
        return `<h1 class="${this.props.classes || ''}"><img src="${this.props.imgSrc || ''}" 
        class="${this.props.imgClasses || ''}" />${this.props.text}</h1>`;
    }
}