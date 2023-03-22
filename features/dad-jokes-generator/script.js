const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("get_joke");

const getJoke = async () => {
  const data = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const res = await data.json();
  const joke = res.joke;

  jokeEl.innerText = joke;
};

getJoke();

jokeBtn.addEventListener("click", getJoke);
