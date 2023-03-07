import { IClassifiedOption } from "~/types/classifiedOption";

export interface IClassified {
    id: number,
    name: string,
    description: string,
    price: string,
    offerNumber: string,
    options: IClassifiedOption[],
}