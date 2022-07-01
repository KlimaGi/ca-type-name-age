let nameFormEl = document.querySelector("#name-form");
let outputEl = document.querySelector("#output");

nameFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let searchName = event.target.elements.name.value;
  console.log(searchName);

  fetch(`https://api.agify.io?name=${searchName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("age", data);
      let age = data.age;
      let ageText = `Age of ${searchName} is ${age}. `;
      outputEl.textContent += ageText;
    });

  fetch(`https://api.genderize.io?name=${searchName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("gender", data);
      let gender = data.gender;
      let probability = data.probability;
      let text = `${searchName} is ${gender} (probability ${
        probability * 100
      }%). `;
      outputEl.textContent += text;
    });

  fetch(`https://api.nationalize.io?name=${searchName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("nationalize", data);
    });
});
