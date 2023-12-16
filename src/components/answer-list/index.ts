import { Answer } from '../../types/answer.interface';
import { BaseComponent } from '../BaseComponent';
import { AnswerItem } from '../answer';
import './answer-list.css';

export class AnswerList extends BaseComponent {
    private answers: Answer[];

    constructor(answers: Answer[]) {
        super();

        this.answers = answers;

        this.render();
        this.renderAnswers();
    }

    protected get template(): string {
        return `<div class="comments">
                <!-- Comment list -->
            </div>`;
    }

    private renderAnswers(): void {
        this.answers.forEach((answer) => {
            const answerComponent = new AnswerItem(answer.respondent, answer.comment);

            this.node.append(answerComponent.element);
        });
    }
}
