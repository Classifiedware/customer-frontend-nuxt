import { IOptionValue } from "~/types/optionValue";

export interface IGroupOption {
    name: string,
    type: string,
    id: number,
    optionValues: IOptionValue[],
    optionValuesSearch: IOptionValue[],
}