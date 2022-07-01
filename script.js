let nameFormEl = document.querySelector("#name-form");
let outputEl = document.querySelector("#output");

nameFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let searchName = event.target.elements.name.value;
  console.log(searchName);

  fetch(`https://agify.io?name=${searchName}`)
    .then((res) => res.json())
    .then((data) => {
      let age = data.age;
      let ageText = `Age of ${searchName} is ${age}.`;
      outputEl.textContent = ageText;
    });
});
