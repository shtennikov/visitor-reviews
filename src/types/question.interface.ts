import { QuestionOptions } from './questionOptions.interface';

export interface Question {
    question: string;
    answers: QuestionOptions[];
}
