const ApiUrl = 'https://api.chucknorris.io/jokes/random';
const Btn = document.getElementById('generate');
const jokeText = document.getElementById('joke');

const execute = function () {
    fetch(ApiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        jokeText.innerHTML = data.value;
      })
      .catch(error => {
        jokeText.innerHTML = error.value;
      });
}

Btn.addEventListener('click', execute);
execute();