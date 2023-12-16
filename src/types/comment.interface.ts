import { Respondent } from './respondent.interface';

export interface Comment {
    respondent: Respondent;
    comment: string;
}
