class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">    
                            <a class="navbar-brand" href="#">Movie List App</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                </div>
                            </div>
                        </div>
                      </nav>`
  }
}

customElements.define("nav-bar", NavBar);