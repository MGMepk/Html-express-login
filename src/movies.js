let myList = document.querySelector("ol");

async function getMovies() {
  fetch("http://localhost:3011/movies")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      message = JSON.stringify(json.message);
      console.log(json);
      showResults(json);
    });
}

async function deleteMovie2() {
  fetch("http://localhost:3011/movies/2", {
    method: "DELETE",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      message = JSON.stringify(json.message);
      console.log(json);
      showResults(json);
    });
}

async function updateMovie3() {
  fetch("http://localhost:3011/movies/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 3,
      title: "El padrino parte II",
      genres: ["Crime", "Drama"],
      year: 1994,
      director: "Frank Darabont",
      actors: [
        "Tim Robbins",
        "Ricard el profe",
        "Bob Gunton",
        "William Sadler",
        "Clancy Brown",
        "Gil Bellows",
      ],
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      message = JSON.stringify(json.message);
      console.log(json);
      showResults(json);
    });
}

function showResults(json) {
  myList.innerHTML = "";
  json.forEach((element) => {
    lisItem = document.createElement("li");
    title = document.createElement("h2");
    year = document.createElement("h3");
    director = document.createElement("h3");
    genres = document.createElement("h3");
    actors = document.createElement("h3");
    title.innerHTML = "Title: " + element.title;
    year.innerHTML = "Year: " + element.year;
    director.innerHTML = "Director: " + element.director;
    genres.innerHTML = "Genres: " + element.genres;
    actors.innerHTML = "Actors: " + element.actors;
    lisItem.appendChild(title);
    lisItem.appendChild(year);
    lisItem.appendChild(director);
    lisItem.appendChild(genres);
    lisItem.appendChild(actors);
    myList.appendChild(lisItem);
  });
}
