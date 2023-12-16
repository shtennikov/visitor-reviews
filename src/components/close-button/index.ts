import { BaseComponent } from '../BaseComponent';
import './close-button.css';

export class CloseButton extends BaseComponent {
    constructor() {
        super();
        this.render();
    }

    protected get template(): string {
        return `<button type="button" class="close-button"><button>`;
    }
}
