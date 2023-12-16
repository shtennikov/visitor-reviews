import { EventEmitter } from '../../core/EventEmitter';
import { Question } from '../../types/question.interface';
import { Comment } from '../../types/comment.interface';
import { BaseComponent } from '../BaseComponent';
import { CommentList } from '../comment-list';
import { Expander } from '../expander';
import './question-card.css';

export class QuestionCard extends BaseComponent {
    private data: Question;
    private activeExpander: Expander | null = null;
    private activeComments: CommentList | null = null;
    private emitter = new EventEmitter();

    constructor(data: Question) {
        super();

        this.data = data;
        this.render();
        this.setListeners();
    }

    protected get template(): string {
        return `
            <div class="question-card">
                <span class="question-card__question">${this.data.question}</span>
                <!-- Expanders -->
            </div>
        `;
    }

    protected render(): void {
        super.render();

        this.data.answers.forEach((answer) => {
            const expander = new Expander(answer, this.emitter);
            this.node.append(expander.element);
        });
    }

    private handleToggleToActive(expander: Expander, comments: Comment[]): void {
        if (this.activeComments) {
            this.activeComments.destroy();
        }
        if (this.activeExpander) {
            this.activeExpander.setInactive();
        }

        this.activeComments = new CommentList(comments);
        this.activeExpander = expander;
        this.activeExpander.setActive();

        expander.element.insertAdjacentElement('afterend', this.activeComments.element);
    }

    private handleToggleToUnactive(expander: Expander): void {
        if (this.activeComments) {
            this.activeComments.destroy();
        }
        expander.setInactive();
    }

    private setListeners(): void {
        this.emitter.on('active', this.handleToggleToActive.bind(this));
        this.emitter.on('unactive', this.handleToggleToUnactive.bind(this));
    }
}
