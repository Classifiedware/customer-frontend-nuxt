<template>
  <main>
    <Header/>

    <div class="container my-5">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">Finde dein Traumfahrzeug noch heute</h1>
          <p class="lead">Auf unserer Platform haben wir die besten Angebote für dich mit den besten Konditionen nutze
            die erweiterte Suche und finde die passenden Angebote. Wir bieten dir das beste Preisleistungsverhältnis und
            du erhälst volle 24 Monate Garantie.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"><i class="bi bi-search"></i>
              100.250 Angebote
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png" alt=""
               width="720">
        </div>
      </div>
    </div>

    <div class="b-example-divider"></div>

    <div class="container px-4 py-5">
      <h2 class="pb-2 border-bottom">Features with title</h2>

      <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div class="col d-flex flex-column align-items-start gap-2">
          <h3 class="fw-bold">Left-aligned title explaining these awesome features</h3>
          <p class="text-muted">Paragraph of text beneath the heading to explain the heading. We'll add onto it with
            another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary btn-lg">Primary button</a>
        </div>

        <div class="col">
          <div class="row row-cols-1 row-cols-sm-2 g-4">
            <div class="col d-flex flex-column gap-2">
              <div
                  class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#collection"/>
                </svg>
              </div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div
                  class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#gear-fill"/>
                </svg>
              </div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div
                  class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#speedometer"/>
                </svg>
              </div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div
                  class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#table"/>
                </svg>
              </div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
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