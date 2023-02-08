<template>
  <main>
    <Header/>

    <div class="container my-5">
      <div class="row">

        <div class="col-12 mt-4" v-for="property in properties">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title pb-2 border-bottom">{{ property.name }}</h4>

              <div class="row">

                <template v-for="groupOption in property.groupOptions">
                  <template v-if="groupOption.type === 'checkbox'">
                    <div class="col-md-3 col-sm-6">
                      <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" :id="`checkbox-${groupOption.id}`">
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
                        <select :id="`select-${groupOption.id}`" class="form-select">
                          <option value="">beliebig</option>
                          <option v-for="optionValue in groupOption.optionValues">{{ optionValue.value }}</option>
                        </select>
                      </div>
                    </div>
                  </template>

                  <template v-if="groupOption.type === 'selectRange'">
                    <label class="fw-bold">{{ groupOption.name }}</label>

                    <div class="col-md-3 col-sm-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text">von</span>
                        <select :id="`selectRange-${groupOption.id}-from`" class="form-select">
                          <option value="">beliebig</option>
                          <option v-for="optionValue in groupOption.optionValues">{{ optionValue.value }}</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text">bis</span>
                        <select :id="`selectRange-${groupOption.id}-to`" class="form-select">
                          <option value="">beliebig</option>
                          <option v-for="optionValue in groupOption.optionValues">{{ optionValue.value }}</option>
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
                               :id="`checkbox-${groupOption.id}-option-value-${optionValue.id}`">
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
                                   :id="`checkbox-${option.id}-option-value-${optionValue.id}`">
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
    </div>

    <div class="b-example-divider"></div>

    <Footer/>

  </main>

</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { defineNuxtComponent } from "nuxt/app";
import SearchService from "../service/search.service";

const searchService = new SearchService();

export default defineNuxtComponent({
  components: {Footer, Header},
  fetchKey: 'properties',
  async asyncData() {
    const response = await searchService.searchProperties();

    console.log('response', response);

    return {
      properties: response.data
    }
  }
})
</script>