console.log("Good Monday everyone!");

// JS POWER! Make your app suggest the user an activity 
const activities = [
  "Bouldering",
  "Get a haircut",
  "Jujitsu",
  "Sleeping",
  "Training"
];

// // 1. Select elements (button, h2)
// const button = document.querySelector(".inspire-me");
// const title = document.querySelector("#activity");

// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   // console.log(event);
//   // 3. Change the DOM ( innerText fo h2)
//   const randomIndex = Math.floor(Math.random() * activities.length);
//   title.innerText = activities[randomIndex];
// });



// JS+API POWER! Fetch an activity with the Bored API - Let's pseudocode!
// ==> www.boredapi.com

// const url = 'https://bored-api.appbrewery.com/'


// 1. Select elements (button, h2)
const button = document.querySelector(".inspire-me");
const title = document.querySelector("#activity");

// 2. Listen to a click on the button
button.addEventListener("click", (event) => {
  // 2.5 Fetch the Bored API
  const url = "https://bored.api.lewagon.com/api/activity/";
  fetch(url)
    .then(response => response.json()) //turn JSON into JS code
    .then((data) => {
      console.log(data.activity); // do something with the data
      // 3. Change the DOM ( innerText fo h2)
      title.innerText = data.activity;
    })
  console.log("Did we receive the data yet?");
});