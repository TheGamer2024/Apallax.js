import { Component } from '../component.js';

export class Css extends Component {
    render() {
        return `<style>
            ${this.props.css}
        </style>`;
    }
}