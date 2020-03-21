class ListMovies extends HTMLElement {
  constructor() {
    super();
    // this.root = this.attachShadow({ mode: 'open'});
  }
  
  set movie(movie){
      this.innerHTML = `<div class="col-md-3">
                          <div class="card mt-3" style="width: 18rem;">
                            <img src="http://image.tmdb.org/t/p/w300/${movie.poster_path}" class="card-img-top">
                            <div class="card-body">
                              <h5 class="card-title">${movie.original_title}</h5>
                              <small>${movie.release_date}</small>
                              <p class="card-text">${movie.overview}</p>
                            </div>
                          </div>
                        </div>`
    }
  }

customElements.define("list-movies", ListMovies);