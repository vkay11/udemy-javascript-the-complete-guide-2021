const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const addMovieButton = addMovieModal.querySelector(".btn--success");
const userInputs = addMovieModal.querySelectorAll("input");
const movies = [];
const entryText = document.getElementById("entry-text");
const ulMovieList = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");

let movieIdCounter = 0;

function updateUI() {
    if (movies.length === 0) {
        entryText.style.display = "block";
    } else {
        entryText.style.display = "none";
    }
}

function removeMovie(index) {
    movies.splice(index, 1);
    movieIdCounter--;
    ulMovieList.children[index].remove();
    deleteMovieModal.classList.remove("visible");
    // console.log(index);
    toggleBackdrop();
    if (movies.length === 0) {
        entryText.style.display = "block";
    }
}

function removeMovieElement(movieIndex) {
    deleteMovieModal.classList.add("visible");
    toggleBackdrop();
    const deleteMovieYesButton = document.querySelector(".btn--danger");
    //console.log(deleteMovieYesButton);
    const deleteMovieCancelButton =
        document.querySelectorAll(".btn--passive")[1];
    //console.log(deleteMovieCancelButton);

    deleteMovieYesButton.addEventListener(
        "click",
        removeMovie.bind(null, movieIndex)
    );
    deleteMovieCancelButton.addEventListener("click", () => {
        deleteMovieModal.classList.remove("visible");
        toggleBackdrop();
    });
}

function renderNewMovieElement(id, title, image, rating) {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${image}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;

    newMovieElement.addEventListener(
        "click",
        removeMovieElement.bind(null, id)
    );
    ulMovieList.append(newMovieElement);
}

function toggleBackdrop() {
    backdrop.classList.toggle("visible");
}

function clearInput() {
    for (userInput of userInputs) {
        userInput.value = "";
    }
}

function toggleMovieModal() {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
    clearInput();
}

function addMovieHandler() {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === "" ||
        imageUrlValue.trim() === "" ||
        parseInt(ratingValue) === "" ||
        parseInt(ratingValue) < 0 ||
        parseInt(ratingValue) > 5
    ) {
        alert("Please enter valid values.!");
        return;
    }

    const movieObject = {
        id: movieIdCounter,
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    };

    movieIdCounter++;
    movies.push(movieObject);
    console.log(movies);
    clearInput();
    updateUI();
    renderNewMovieElement(
        movieObject.id,
        movieObject.title,
        movieObject.image,
        movieObject.rating
    );
    toggleMovieModal();
}

function closeMovieModal() {
    addMovieModal.classList.remove("visible");
    toggleBackdrop();
    deleteMovieModal.classList.remove("visible");
    clearInput();
}

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", closeMovieModal);
cancelAddMovieButton.addEventListener("click", toggleMovieModal);
addMovieButton.addEventListener("click", addMovieHandler);
