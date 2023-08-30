async function logMovies() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log("response")
    const movies = await response.json();
    console.log(movies);
  }
  logMovies()
  