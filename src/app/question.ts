import { Option } from "./option";

export class Question {
    id?: number;
    question?: string;
    answerId?: number;
    marks?: number;
    options?: Option[];
    selectedAnswer?: number;
}
