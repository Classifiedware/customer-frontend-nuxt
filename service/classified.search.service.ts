import { useRuntimeConfig } from "nuxt/app";
import { ref } from 'vue';
import { IProperty } from "~/types/property";
import { IGroupOption } from "~/types/groupOption";
import { IClassified } from "~/types/classified";
import { IClassifiedOption } from "~/types/classifiedOption";

export default class ClassifiedSearchService {
    async searchClassifieds(properties: any, checkboxIds: any): Promise<{ data: any } | { data: IClassified[] }> {
        console.log('search classifieds', this.mapGroupOptionValueIds(properties, checkboxIds));

        const config = useRuntimeConfig();
        const propertyGroupOptionValueIds = this.mapGroupOptionValueIds(properties, checkboxIds);

        return await $fetch(`/search/classified`, {
            method: 'POST',
            baseURL: config.public.apiUrl,
            body: {
                page: 1,
                propertyGroupOptionValueIds
            }
        })
            .then((response: any) => {
                return { data: response.data.map((data: any) => this.createClassifiedFromData(data)) };
            }).catch(() => {
                return { data: [] };
            });
    }

    mapGroupOptionValueIds(properties: any, checkboxIds: any) {
        console.log('checkbox ids', checkboxIds);

        let optionValueIds = ref([]);

        properties.forEach((property: IProperty) => {
            property.groupOptions.forEach((groupOption: IGroupOption) => {

                if (groupOption.optionValueSelectFirst) {
                    optionValueIds.value.push(groupOption.optionValueSelectFirst);
                }

                if (groupOption.optionValueSelectSecond) {
                    optionValueIds.value.push(groupOption.optionValueSelectSecond);
                }
            });
        });

        return checkboxIds.value.concat(optionValueIds.value);
    }

    createClassifiedFromData(data: any) {
        let classifiedOptions: IClassifiedOption[] = [];

        data.options.forEach((optionRow: any) => {
           const classifiedOption: IClassifiedOption = {
             optionName: optionRow.optionName,
             value: optionRow.value,
           };

           classifiedOptions.push(classifiedOption);
        });

        const classified: IClassified = {
          id: data.id,
          name: data.name,
          description: data.description,
          price: data.price,
          offerNumber: data.offerNumber,
          options: classifiedOptions,
        };

        return classified;
    }
}