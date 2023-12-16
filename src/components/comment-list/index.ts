import { Comment } from '../../types/comment.interface';
import { BaseComponent } from '../BaseComponent';
import { CloseButton } from '../close-button';
import { CommentItem } from '../comment';
import './comment-list.css';

export class CommentList extends BaseComponent {
    private comments: Comment[];

    constructor(comments: Comment[]) {
        super();

        this.comments = comments;

        this.render();
    }

    protected get template(): string {
        return `<div class="wrapper">
                <!-- Comment list -->
            </div>`;
    }

    protected render(): void {
        super.render();

        const closeButton = new CloseButton();
        const comments = document.createElement('div');

        closeButton.element.classList.add('comments__close-btn');
        comments.classList.add('comments');

        this.comments.forEach((comment) => {
            const answerComponent = new CommentItem(comment.respondent, comment.comment);

            comments.append(answerComponent.element);
        });

        this.node.append(closeButton.element, comments);
    }
}
