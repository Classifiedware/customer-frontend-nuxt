<template>
  <main>
    <Header/>

    <div class="container my-5">
      <form>
        <div class="row">

          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <button type="reset" class="btn btn-light float-start">Suche zurücksetzen</button>
                    <button type="button" class="btn btn-primary float-end" @click="searchClassifieds">Jetzt Suchen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mt-4" v-for="property in properties">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title pb-2 border-bottom">{{ property.name }}</h4>

                <div class="row">

                  <template v-for="groupOption in property.groupOptions">
                    <template v-if="groupOption.type === 'checkbox'">
                      <div class="col-md-3 col-sm-6">
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

                    <template v-if="groupOption.type === 'select'">
                      <div class="col-md-4 col-sm-6">
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

                    <template v-if="groupOption.type === 'selectRange'">
                      <label class="fw-bold">{{ groupOption.name }}</label>

                      <div class="col-md-3 col-sm-6">
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

                      <div class="col-md-3 col-sm-6">
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

                      <div class="col-md-3 col-sm-6" v-for="optionValue in groupOption.optionValues">
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
                          <div class="col-md-4" v-for="optionValue in option.optionValues">
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
              </div>
            </div>
          </div>
        </div>

      </form>

    </div>

    <div class="b-example-divider"></div>

    <Footer/>

  </main>

</template>
<script setup>
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ref} from 'vue';
import { useRouter } from 'nuxt/app';

import SearchService from "../service/search.service";

const router = useRouter();
const searchService = new SearchService();

const {data: properties} = await searchService.searchProperties();

const checkboxIds = ref([]);

async function searchClassifieds() {
  await router.push({ name: 'listing', query: { 'pIds[]': checkboxIds.value } })
}
</script>