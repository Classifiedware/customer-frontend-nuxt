import { useRuntimeConfig } from "nuxt/app";
import { IProperty } from "~/types/property";
import { IGroupOption } from "~/types/groupOption";
import { IOptionValue } from "~/types/optionValue";

export default class SearchService {
    async searchProperties(): Promise<{ data: any } | { data: IProperty[] }> {
        const config = useRuntimeConfig();

        return await $fetch(`${config.public.apiUrl}/search/property/options`)
            .then((response: any) => {
                return { data: response.data.map((data: any) => this.createPropertyFromData(data)) };
            }).catch(() => {
                return { data: [] };
            });
    }

    async searchClassifieds(properties: any) {
        let optionValueIds = [];

        console.log('properties', properties);

        properties.forEach((property: IProperty) => {
            property.groupOptions.forEach((groupOption: IGroupOption) => {

                if (groupOption.optionValueSelectFirst) {
                    optionValueIds.push(groupOption.optionValueSelectFirst);
                }

                if (groupOption.optionValueSelectSecond) {
                    optionValueIds.push(groupOption.optionValueSelectSecond);
                }
            });
        });

        console.log('search classifieds', optionValueIds);
    }

    createPropertyFromData(data: any): IProperty {
        let groupOptions: IGroupOption[] = [];

        data.groupOptions.forEach((groupOptionRow: any) => {
            let optionValues: IOptionValue[] = [];

            if (groupOptionRow.optionValues) {
                groupOptionRow.optionValues.forEach((optionValueRow: any) => {
                    const optionValue: IOptionValue = {
                        value: optionValueRow.value,
                        id: optionValueRow.id,
                    };

                    optionValues.push(optionValue);
                });
            }

            const groupOption: IGroupOption = {
              name: groupOptionRow.name,
              type: groupOptionRow.type,
              id: groupOptionRow.id,
              optionValues: optionValues,
              optionValueSelectFirst: null,
              optionValueSelectSecond: null,
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