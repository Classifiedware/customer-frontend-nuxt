<template>
  <main>
    <Header/>

    <div class="container my-5">
      <div class="row">

        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title pb-2 border-bottom">Fahrzeugzustand</h4>

              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="option1">
                    <label class="form-check-label" for="option1">Option 1</label>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="option2">
                    <label class="form-check-label" for="option2">Option 1</label>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="option3">
                    <label class="form-check-label" for="option3">Option 1</label>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="option4">
                    <label class="form-check-label" for="option4">Option 1</label>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="option5">
                    <label class="form-check-label" for="option5">Option 1</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 mt-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title pb-2 border-bottom">Marke, Modell, Variante</h4>

              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="selectManufacturer" class="form-label">Marke</label>
                    <select id="selectManufacturer" class="form-select">
                      <option>Option 1</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="selectModel" class="form-label">Modell</label>
                    <select id="selectModel" class="form-select">
                      <option>Option 1</option>
                    </select>
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

export default {
  components: {Footer, Header}
}
</script>