import { useRuntimeConfig } from "nuxt/app";

export default class SearchService {
    async searchProperties(): Promise<{ data: any } | { data: any[] }> {
        const config = useRuntimeConfig();

        return await $fetch(`${config.public.apiUrl}/search/property/options`)
            .then((response) => {
                return { data: response.data };
            }).catch((error) => {
                return { data: [] };
            });
    }
}