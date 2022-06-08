const btn = document.getElementById('btn');
const jokeContainer = document.getElementById('joke');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

let getJoke = () => {
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(data => {
        jokeContainer.textContent = `${data.joke}`;
        jokeContainer.classList.add("fade");
    });
}

btn.addEventListener("click",getJoke)
getJoke()
