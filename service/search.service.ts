import { useRuntimeConfig } from "nuxt/app";
import { IProperty } from "~/types/property";
import { IGroupOption } from "~/types/groupOption";
import { IOptionValue } from "~/types/optionValue";

export default class SearchService {
    async searchProperties(): Promise<{ data: any } | { data: IProperty[] }> {
        const config = useRuntimeConfig();

        return await $fetch(`${config.public.apiUrl}/search/property/options`)
            .then((response: any) => {
                return { data: response.data.map((data: any) => this.createFromPropertyFromData(data)) };
            }).catch((error) => {
                return { data: [] };
            });
    }

    createFromPropertyFromData(data: any): IProperty {
        let groupOptions: IGroupOption[] = [];

        data.groupOptions.forEach((groupOptionRow: any) => {
            let optionValues: IOptionValue[] = [];

            groupOptionRow.optionValues.forEach((optionValueRow: any) => {
               const optionValue: IOptionValue = {
                 value: optionValueRow.value,
                 id: optionValueRow.id,
               };

               optionValues.push(optionValue);
            });

            const groupOption: IGroupOption = {
              name: groupOptionRow.name,
              type: groupOptionRow.type,
              id: groupOptionRow.id,
              optionValues: optionValues,
            };

            groupOptions.push(groupOption);
        });

        return {
            name: data.name,
            isEquipmentGroup: data.isEquipmentGroup,
            id: data.id,
            groupOptions: groupOptions,
        };
    }
}