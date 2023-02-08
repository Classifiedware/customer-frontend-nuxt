import type { IGroupOption } from "~/types/groupOption";

export interface IProperty {
    name: string,
    isEquipmentGroup: boolean,
    id: number,
    groupOptions: IGroupOption[],
}