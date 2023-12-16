import { Comment } from '../../types/comment.interface';
import { BaseComponent } from '../BaseComponent';
import { AnswerItem } from '../answer';
import './comment-list.css';

export class CommentList extends BaseComponent {
    private comments: Comment[];

    constructor(comments: Comment[]) {
        super();

        this.comments = comments;

        this.render();
    }

    protected get template(): string {
        return `<div class="comments">
                <!-- Comment list -->
            </div>`;
    }

    protected render(): void {
        super.render();

        this.comments.forEach((comment) => {
            const answerComponent = new AnswerItem(comment.respondent, comment.comment);

            this.node.append(answerComponent.element);
        });
    }
}
