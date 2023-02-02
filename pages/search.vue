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

                <div class="col-md-4" v-for="groupOption in property.groupOptions">
                  <div class="mb-3 form-check" v-if="groupOption.type === 'checkbox'">
                    <input type="checkbox" class="form-check-input" id="option1">
                    <label class="form-check-label" for="option1">{{ groupOption.name }}</label>
                  </div>

                  <div class="mb-3" v-if="groupOption.type === 'select'">
                    <label for="selectManufacturer" class="form-label">{{ groupOption.name }}</label>
                    <select id="selectManufacturer" class="form-select">
                      <option v-for="optionValue in groupOption.optionValues">{{ optionValue.value }}</option>
                    </select>
                  </div>

                  <div v-if="groupOption.type === 'selectRange'">

                    <div class="row">
                      <label class="font-bold">{{ groupOption.name }}</label>

                      <div class="col">
                        <select :id="`selectRange-${groupOption.id}-from`" class="form-select">
                          <option selected>von</option>
                          <option v-for="optionValue in groupOption.optionValues">{{ optionValue.value }}</option>
                        </select>
                      </div>

                      <div class="col">
                        <select :id="`selectRange-${groupOption.id}-to`" class="form-select">
                          <option selected>bis</option>
                          <option v-for="optionValue in groupOption.optionValues">{{ optionValue.value }}</option>
                        </select>
                      </div>

                    </div>

                  </div>

                  <div class="mb-3" v-if="groupOption.type === 'multiSelect'">
                    <div class="accordion" :id="`accordion-${groupOption.id}`">
                      <div class="accordion-item">
                        <h2 class="accordion-header" :id="`accordion-${groupOption.id}-heading`">
                          <button class="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  :data-bs-target="`accordion-${groupOption.id}-collapse`"
                                  aria-expanded="true"
                                  :aria-controls="`accordion-${groupOption.id}-collapse`">
                            {{ groupOption.name }}
                          </button>
                        </h2>
                        <div :id="`accordion-${groupOption.id}-collapse`"
                             class="accordion-collapse collapse show"
                             :aria-labelledby="`accordion-${groupOption.id}-heading`"
                             :data-bs-parent="`#accordion-${groupOption.id}`">
                          <div class="accordion-body">
                            <div class="mb-3 form-check" v-for="optionValue in groupOption.optionValues">
                              <input type="checkbox" class="form-check-input"
                                     :id="`accordion-${groupOption.id}-option-value-${optionValue.id}`">
                              <label class="form-check-label" for="option1">{{ optionValue.value }}</label>
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
    </div>

    <div class="b-example-divider"></div>

    <Footer/>

  </main>

</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import {defineNuxtComponent} from "nuxt/app";

export default defineNuxtComponent({
  components: {Footer, Header},
  fetchKey: 'properties',
  async asyncData() {
    const propertiesResponse = await $fetch('http://classifiedware-api.test/customer-frontend-api/search/property/options');

    return {
      properties: propertiesResponse.data
    }
  }
})
</script>