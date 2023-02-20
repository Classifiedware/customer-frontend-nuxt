import { IOptionValue } from "~/types/optionValue";

export interface IGroupOption {
    name: string,
    type: string,
    id: number,
    optionValues: IOptionValue[],
    optionValueSelectFirst: null | IOptionValue,
    optionValueSelectSecond: null | IOptionValue,
}