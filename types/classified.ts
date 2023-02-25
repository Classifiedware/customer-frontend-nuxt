import { IClassifiedOption } from "~/types/classifiedOption";

export interface IClassified {
    id: number,
    name: string,
    description: string,
    price: number,
    offerNumber: string,
    options: IClassifiedOption[],
}