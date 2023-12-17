import { EventEmitter } from '../../core/EventEmitter';
import { Comment } from '../../types/comment.interface';
import { BaseComponent } from '../BaseComponent';
import { CloseButton } from '../close-button';
import { CommentItem } from '../comment';
import './comment-list.css';

export class CommentList extends BaseComponent {
    private comments: Comment[];
    private emitter: EventEmitter;

    constructor(comments: Comment[], emitter: EventEmitter) {
        super();

        this.comments = comments;
        this.emitter = emitter;

        this.render();
    }

    protected get template(): string {
        return `<div class="wrapper">
                <!-- Comment list -->
            </div>`;
    }

    private handleClose(): void {
        this.emitter.emit('comments:close');
    }

    protected render(): void {
        super.render();

        const closeButton = new CloseButton();
        const comments = document.createElement('div');

        closeButton.element.classList.add('comments__close-btn');
        closeButton.element.addEventListener('click', this.handleClose.bind(this));

        comments.classList.add('comments');

        this.comments.forEach((comment) => {
            const answerComponent = new CommentItem(comment.respondent, comment.comment);

            comments.append(answerComponent.element);
        });

        this.node.append(closeButton.element, comments);
    }
}
