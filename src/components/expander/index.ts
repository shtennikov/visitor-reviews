import { Answer } from '../../types/answer.interface';
import { QuestionOptions } from '../../types/questionOptions.interface';
import { BaseComponent } from '../BaseComponent';
import './expander.css';

export class Expander extends BaseComponent {
    private id: number;
    private option: string;
    private count: number;
    private percentage: number;
    private answers: Answer[];
    private isActive = false;

    constructor(options: QuestionOptions) {
        super();

        this.id = options.id;
        this.option = options.option;
        this.count = options.count;
        this.percentage = options.percentage;
        this.answers = options.answers;

        this.render();
        this.initListeners();
    }

    protected get template(): string {
        return `
        <div class="expander">
            <input class="expander__input" type="radio" name="option-${this.id}">
            <label class="expander__label" for="option-${this.id}">
                <span class="expander__toggle"></span>
                <span class="expander__option">${this.option}</span>
                <span class="expander__count">${this.count}</span>
                <span class="expander__percentage">${this.percentage}%</span>
            </label>
        </div>
        `;
    }

    private initListeners(): void {
        // TODO Observer
        this.node.addEventListener('click', () => {
            this.node.classList.toggle('active');
            this.isActive = !this.isActive;
        });
    }
}
