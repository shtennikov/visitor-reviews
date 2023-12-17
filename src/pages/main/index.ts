import { BaseComponent } from '../../components/BaseComponent';
import { QuestionCard } from '../../components/question-card';
import data from '../../data/db.json';
import './main.css';

export class MainPage extends BaseComponent {
    constructor() {
        super();

        this.render();
    }

    protected get template(): string {
        return `
            <main class="main">
                <!-- Content -->
            </main>
        `;
    }

    protected render(): void {
        super.render();

        const questionCard = new QuestionCard(data);

        this.node.append(questionCard.element);
    }
}
