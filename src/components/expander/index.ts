import { EventEmitter } from '../../core/EventEmitter';
import { Comment } from '../../types/comment.interface';
import { QuestionOptions } from '../../types/questionOptions.interface';
import { BaseComponent } from '../BaseComponent';
import './expander.css';

export class Expander extends BaseComponent {
    private id: number;
    private option: string;
    private count: number;
    private percentage: number;
    private comments: Comment[];
    private emitter: EventEmitter;
    private isActive = false;

    constructor(options: QuestionOptions, emitter: EventEmitter) {
        super();

        this.id = options.id;
        this.option = options.option;
        this.count = options.count;
        this.percentage = options.percentage;
        this.comments = options.comments;
        this.emitter = emitter;

        this.render();
        this.initListeners();
    }

    public setActive(): void {
        this.isActive = true;
        this.node.classList.add('active');
    }

    public setInactive(): void {
        this.isActive = false;
        this.node.classList.remove('active');
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
        this.node.addEventListener('click', () => {
            if (!this.isActive) {
                this.emitter.emit('active', this, this.comments);
            } else {
                this.emitter.emit('unactive', this);
            }
        });
    }
}
