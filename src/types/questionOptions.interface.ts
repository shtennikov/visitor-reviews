import { Comment } from './comment.interface';

export interface QuestionOptions {
    id: number;
    option: string;
    count: number;
    percentage: number;
    comments: Comment[];
}
