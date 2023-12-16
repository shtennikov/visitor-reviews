import { Respondent } from '../../types/respondent.interface';
import { BaseComponent } from '../BaseComponent';
import { UserBadge } from '../user-bage';
import './answer.css';

export class AnswerItem extends BaseComponent {
    private respondent: Respondent;
    private comment: string;
    private bage: UserBadge;

    constructor(respondent: Respondent, comment: string) {
        super();

        this.respondent = respondent;
        this.comment = comment;
        this.bage = new UserBadge(this.respondent);

        this.render();
        this.renderAnswer();
    }

    protected get template(): string {
        return `<div class="answer">
                <!-- UserBage  Comment -->
            </div>`;
    }

    protected render(): void {
        super.render();

        const comment = document.createElement('span');

        comment.classList.add('answer__text');
        comment.textContent = this.comment;
        this.bage.element.classList.add('answer__user');

        this.node.append(this.bage.element, comment);
    }
}
