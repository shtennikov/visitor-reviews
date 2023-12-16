import { Answer } from './answer.interface';

export interface QuestionOptions {
    id: number;
    option: string;
    count: number;
    percentage: number;
    answers: Answer[];
}
