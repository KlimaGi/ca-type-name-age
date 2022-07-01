let nameFormEl = document.querySelector("#name-form");
let outputEl = document.querySelector("#output");
let outputBlockEl = document.querySelector("#output-block");

nameFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let searchName = event.target.elements.name.value;
  console.log(searchName);

  fetch(`https://api.agify.io?name=${searchName}`)
    .then((res) => res.json())
    .then((data) => {
      let age = data.age;
      let ageText = `Age of ${searchName} is ${age}. `;
      outputEl.textContent += ageText;
    });

  fetch(`https://api.genderize.io?name=${searchName}`)
    .then((res) => res.json())
    .then((data) => {
      let gender = data.gender;
      let probability = data.probability;
      console.log("gender probability", probability);
      let text = `${searchName} is ${gender} (probability ${
        probability * 100
      }%). `;
      outputEl.textContent += text;
    });

  fetch(`https://api.nationalize.io?name=${searchName}`)
    .then((res) => res.json())
    .then((data) => {
      let countryId = data.country[0].country_id;
      let probability = data.country[0].probability.toFixed(2);
      let nationalityText = `${searchName} is ${countryId} (probability ${probability}%). `;
      outputEl.textContent += nationalityText;
    });

  nameFormEl.reset();

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn-clear");
  deleteBtn.textContent = "x";
  outputBlockEl.append(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    outputEl.textContent = "";
  });
});
