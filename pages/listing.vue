<template>
  <main>
    <Header/>

    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Suche</h3>

                <div class="list-group w-auto">

                  <template v-for="property in properties">

                    <h6 class="card-title pb-2 border-bottom">{{ property.name }}</h6>


                    <div class="row">
                    <template v-for="groupOption in property.groupOptions">
                      <template v-if="groupOption.type === 'select'">
                        <div class="col-md-12 col-sm-6">
                          <div class="input-group mb-3">
                            <span class="input-group-text">{{ groupOption.name }}</span>
                            <select :id="`select-${groupOption.id}`"
                                    class="form-select"
                                    v-model="groupOption.optionValueSelectFirst">
                              <option value="">beliebig</option>
                              <option v-for="optionValue in groupOption.optionValues"
                                      :value="optionValue.id">
                                {{ optionValue.value }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </template>

                      <template v-if="groupOption.type === 'checkbox'">
                        <div class="col-md-6 col-sm-6">
                          <div class="mb-3 form-check">
                            <input type="checkbox"
                                   class="form-check-input"
                                   :value="groupOption.id"
                                   :id="`checkbox-${groupOption.id}`"
                                   v-model="checkboxIds">
                            <label class="form-check-label" :for="`checkbox-${groupOption.id}`">{{
                                groupOption.name
                              }}</label>
                          </div>
                        </div>
                      </template>

                      <template v-if="groupOption.type === 'selectRange'">
                        <label class="fw-bold">{{ groupOption.name }}</label>

                        <div class="col-md-6 col-sm-6">
                          <div class="input-group mb-3">
                            <span class="input-group-text">von</span>
                            <select :id="`selectRange-${groupOption.id}-from`"
                                    class="form-select"
                                    v-model="groupOption.optionValueSelectFirst">
                              <option value="">beliebig</option>
                              <option v-for="optionValue in groupOption.optionValues"
                                      :value="optionValue.id">
                                {{ optionValue.value }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="col-md-6 col-sm-6">
                          <div class="input-group mb-3">
                            <span class="input-group-text">bis</span>
                            <select :id="`selectRange-${groupOption.id}-to`"
                                    class="form-select"
                                    v-model="groupOption.optionValueSelectSecond">
                              <option value="">beliebig</option>
                              <option v-for="optionValue in groupOption.optionValues"
                                      :value="optionValue.id">
                                {{ optionValue.value }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </template>

                      <template v-if="groupOption.type === 'checkboxGroup'">
                        <label class="fw-bold">{{ groupOption.name }}</label>

                        <div class="col-md-6 col-sm-6" v-for="optionValue in groupOption.optionValues">
                          <div class="mb-3 form-check">
                            <input type="checkbox"
                                   class="form-check-input"
                                   :value="optionValue.id"
                                   :id="`checkbox-${groupOption.id}-option-value-${optionValue.id}`"
                                   v-model="checkboxIds">
                            <label class="form-check-label"
                                   :for="`checkbox-${groupOption.id}-option-value-${optionValue.id}`">
                              {{ optionValue.value }}
                            </label>
                          </div>
                        </div>
                      </template>
                    </template>

                      <template v-if="property.isEquipmentGroup">
                        <ul class="nav nav-tabs" :id="`tab-property-${property.id}`" role="tablist">
                          <li class="nav-item" role="presentation" v-for="(option, index) in property.groupOptions">
                            <button :class="`${index === 0 ? 'nav-link active' : 'nav-link'}`"
                                    :id="`${option.id}-tab`"
                                    data-bs-toggle="tab"
                                    :data-bs-target="`#${option.id}-tab-pane`"
                                    type="button"
                                    role="tab"
                                    :aria-controls="`${option.id}-tab-pane`"
                                    aria-selected="false">
                              {{ option.name }}
                            </button>
                          </li>
                        </ul>
                        <div class="tab-content" :id="`tab-property-${property.id}-content`"
                             v-for="(option, index) in property.groupOptions">
                          <div :class="`${index === 0 ? 'tab-pane fade show active' : 'tab-pane fade'}`"
                               :id="`${option.id}-tab-pane`"
                               role="tabpanel"
                               :aria-labelledby="`${option.id}-tab`"
                               tabindex="0">
                            <div class="row">
                              <div class="col-md-6 col-sm-6" v-for="optionValue in option.optionValues">
                                <div class="mb-3 form-check">
                                  <input type="checkbox"
                                         class="form-check-input"
                                         :value="optionValue.id"
                                         :id="`checkbox-${option.id}-option-value-${optionValue.id}`"
                                         v-model="checkboxIds">
                                  <label class="form-check-label"
                                         :for="`checkbox-${option.id}-option-value-${optionValue.id}`">
                                    {{ optionValue.value }}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>


                    </div>

                  </template>


                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="card" v-for="classified in classifieds.data">
              <div class="card-body">
                <div class="row">
                  <div class="col-4">
                    <div class="classified-image-block">
                      <img class="img-responsive"
                           :src="`https://via.placeholder.com/240x180.png?text=${classified.name}`"
                           :alt="classified.name">
                    </div>
                  </div>

                  <div class="col-8">
                    <div class="row">
                      <div class="col-7">
                        <div class="classified-title-block">
                          <span class="h3 text-break">{{ classified.name }}</span>
                        </div>
                      </div>

                      <div class="col-5">
                        <div class="classified-price-block">
                          <span class="h3">{{ classified.price }} €</span>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-md-6" v-for="option in classified.options">{{ option.optionName }}: {{ option.value }}</div>
                        </div>
                      </div>

                      <div class="col-12 mt-2">
                        <div class="row">
                          <div class="col-2">
                            <div class="dealer-logo-block">
                              <div class="dealer-image-wrapper">
                                <img class="img-responsive" src="https://via.placeholder.com/80x35.png?text=Test+Dealer" alt="Dealer Logo">
                              </div>
                            </div>
                          </div>
                          <div class="col-10">
                            <span class="dealer-name">Händler Test</span>
                          </div>
                          <div class="col-10">
                            Tel.: + 49 (0)100 12345678
                            <br>
                            DE-12345 Test, Händler
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>

    <div class="b-example-divider"></div>

    <Footer/>

  </main>

</template>
<script setup>
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ref} from 'vue';
import { useRoute, useAsyncData } from 'nuxt/app';

import SearchService from "../service/search.service";
import ClassifiedSearchService from "../service/classified.search.service";

const route = useRoute();

const searchService = new SearchService();
const classifiedSearchService = new ClassifiedSearchService();

const {data: properties} = await searchService.searchProperties();

const checkboxIds = ref([]);
const selectIds = ref([]);
const selectIdsSecond = ref([]);

if (route.query['pIds']) {
  checkboxIds.value = route.query['pIds'].split(',');
}

if (route.query['sIds']) {
  selectIds.value = route.query['sIds'].split(',');
}

if (route.query['sIdsS']) {
  selectIdsSecond.value = route.query['sIdsS'].split(',');
}

console.log('ids', checkboxIds.value, selectIds.value, selectIdsSecond.value)

console.log('properties', properties);

const propertyGroupOptionValueIds = ref([...checkboxIds.value, ...selectIds.value, ...selectIdsSecond.value]);

properties.forEach((property) => {
  property.groupOptions.forEach((groupOption) => {

    groupOption.optionValues.forEach((optionValue) => {
      selectIds.value.forEach((selectId) => {
        if (selectId == optionValue.id) {
          console.log('it works')

          groupOption.optionValueSelectFirst = optionValue.id;
        }
      });

      selectIdsSecond.value.forEach((selectId) => {
        if (selectId == optionValue.id) {
          console.log('it works')

          groupOption.optionValueSelectSecond = optionValue.id;
        }
      });


    })
  })
});

const { data: classifieds } = await useAsyncData(
    'classifieds',
    () => classifiedSearchService.searchClassifieds(properties, propertyGroupOptionValueIds.value),
    {
      watch: [
        checkboxIds
      ]
    }
);

console.log('classifieds', classifieds.value);
</script>