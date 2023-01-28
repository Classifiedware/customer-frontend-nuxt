<template>
  <main>
    <Header/>

    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Suche</h5>

                <div class="list-group w-auto">
                  <label class="list-group-item d-flex gap-2">
                                    <span>
                                        Fahrzeugzustand
        <small class="d-block text-muted">With support text underneath to add more detail</small>
      </span>

                    <select id="selectManufacturer" class="flex-shrink-0">
                      <option>Option 1</option>
                    </select>
                  </label>

                  <label class="list-group-item d-flex gap-2">
                                    <span>
                                        Marke, Modell, Variante
        <small class="d-block text-muted">With support text underneath to add more detail</small>
      </span>

                    <select id="selectModel" class="flex-shrink-0">
                      <option>Option 1</option>
                    </select>
                  </label>

                  <hr>

                  <label class="d-flex gap-2 mb-2 mt-2">
                    <strong>Ausstatung</strong>
                  </label>

                  <ul class="list-group">
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                      <label class="form-check-label" for="firstCheckbox">Bluetooth</label>
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
                      <label class="form-check-label" for="secondCheckbox">Boardcomputer</label>
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
                      <label class="form-check-label" for="thirdCheckbox">CD-Spieler</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-4">
                    <div class="classified-image-block">
                      <img class="img-responsive"
                           src="https://via.placeholder.com/240x180.png?text=Test+Car"
                           alt="BMW 540i Luxury Line LCProf ACC LED DAB HiFi Leder">
                    </div>
                  </div>

                  <div class="col-8">
                    <div class="row">
                      <div class="col-7">
                        <div class="classified-title-block">
                          <span class="h3 text-break">BMW 540i Luxury Line LCProf ACC LED DAB HiFi Leder</span>
                        </div>
                      </div>

                      <div class="col-5">
                        <div class="classified-price-block">
                          <span class="h3">80.123 €</span>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <div class="classified-data">
                          <div>EZ 01/2023, 10.560 km, 250 kW (340 PS)</div>
                          <div>Jahreswagen, Limousine, <b>Unfallfrei</b>, Hybrid (Benzin/Elektro),
                            Automatik, HU 01/2027, 4/5 Türen
                          </div>
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
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {Footer, Header}
}
</script>