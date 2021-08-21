const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

let movies = [];
let idCounter = 0;

function renderMovies(filter = '') {
    const movieList = document.getElementById('movie-list');
    
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    }
    else {
        movieList.classList.add('visible');
    }
    
    movieList.innerHTML = '';

    let filteredMovies = [];

    if (!filter) {
        filteredMovies = movies;
    }
    else {
        filteredMovies = movies.filter(movie => movie.info.title.includes(filter));
    }

    filteredMovies.forEach(movie => {
        const movieElement =    document.createElement('li');
        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key}: ${movie.info[key]}`;
            }
        }
        movieElement.textContent = text;
        movieList.append(movieElement); 
    })
}

function addMovieHandler() {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (
        title.trim() === "" ||
        extraName.trim() === "" ||
        extraValue.trim() === ""
    ) {
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: idCounter
    };

    movies.push(newMovie);
    idCounter++;
    renderMovies();
}


function searchMovieHandler() {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}


addMovieButton.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMovieHandler);
