/* 


Denne koden henter inn EN person fra API'et til randomuser


*/

// const url = "https://randomuser.me/api";
// const container = document.querySelector(".container");

// async function getApi() {
//     const response = await fetch(url);
//     const svar = await response.json();

//     console.log(svar.results[0]);

//     container.innerHTML = `

//     <div>
//         <img src=${svar.results[0].picture.large} height="200"/>
//         <h1>${svar.results[0].name.first} ${svar.results[0].name.last}</h1>
//         <h3>${svar.results[0].email}</h3>
//     </div>

//     `;
// }

// getApi();

/* 


Hente ut 10 personer fra API'et til nokeynoshade 


*/

// const url = "http://www.nokeynoshade.party/api/queens?limit=50";

// const resultContainer = document.querySelector(".container");

// async function getProducts() {
//     const response = await fetch(url);
//     const svar = await response.json();

//     console.log(svar);

//     resultContainer.innerHTML = "";

//     for (let i = 0; i < 5; i++) {
//         console.log(svar[i].name);
//         resultContainer.innerHTML += `
//         <img src="${svar[i].image_url}" height="200" alt="" />
//         <h1>${svar[i].name}</h1>
//         <p>${svar[i].quote}</p>
//         `;
//     }
// }

// getProducts();

/* 


Hente værdata


*/

//const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
//const container = document.querySelector(".container");
//
//async function getWeather() {
//    const options = {
//        method: "GET",
//        headers: {
//            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//            "X-RapidAPI-Key": "5d0d9f3a0fmsh43b83c96da35411p13fdf0jsnc98362a4e01a",
//        },
//    };
//
//    const response = await fetch(url, options);
//    const svar = await response.json();
//
//    console.log(svar);
//
//    container.innerHTML = `
//
//    <h1>${svar.location.name}</h1>
//    <div class="flex">
//    <span>${svar.current.temp_c}&deg;C</span>
//    <img src=${svar.current.condition.icon} height="100"/>
//    <span>Føles som ${svar.current.feelslike_c}&deg;C</span>
//
//    </div>
//
//    `;
//}
//
//getWeather();


/*
Hente værdata med søkefelt
*/

const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const container = document.querySelector(".results");

const rapidApiKey = "5d0d9f3a0fmsh43b83c96da35411p13fdf0jsnc98362a4e01a"
const rapidApiHost = "weatherapi-com.p.rapidapi.com"


   const options = {
       method: "GET",
       headers: {
           "X-RapidAPI-Host": rapidApiHost,
           "X-RapidAPI-Key": rapidApiKey,
       },
   };

   function inputChange(event) {
       const cityCheck =  document.querySelector("#city-search").value;
       console.log(cityCheck);

       async function getWeather() {
           const response = await fetch(url + cityCheck, options)
           const results = await response.json();

           function windSpeedConverter(kph) {

           
            return (kph * 1000) / 60 / 60
           }

           const getKph = results.current.wind_kph
           const kphToMps = windSpeedConverter(getKph).toFixed(2);


           console.log(results);
           
           container.innerHTML = `
           <div class="result">
            <h1>${results.location.name}</h1>
            <img src="${results.current.condition.icon}" height="200" alt="Image of ${results.current.condition.text}">
            <h2 id="varet-h2">${results.current.condition.text}</h2>
            <h3 id="varet-h3">${results.current.temp_c}&deg;C<h3>
            <p>${kphToMps} m/s, ${results.current.wind_dir}</p>
           </div>
           `;
           //endre html og sette inn resultater
           //lage en class for hele resultatsiden
           //navn på stedet
           //icon for været
           //været
           //temperaturen
           //vindfart i meter pr sekund og retning
       }
       getWeather()
   }
   const appearField = document.querySelector("#varet-timer") //hente timer feltet i html

   setTimeout(() => {
        appearField.innerHTML = "Har du husket å skrive inn en by?"
   }, "5000") //sette inn en reminder om å skrive inn en by ved å legge til html etter 5000ms=5s
  
   //script for FFXIV DPS
   //Fane-kode jeg har fått fra en venn
// Get all the tab groups (elements with the .tabs class).
const tabGroups = document.querySelectorAll(".tabs");

// Loop through all the tab groups.
for (let tabGroup of tabGroups) {
  // Get all the li elements in the tab group.
  let lis = tabGroup.querySelectorAll("li");

  // Loop through the li elements inside the tab group.
  for (let li of lis) {
    // Get the anchor inside the li element.
    let a = li.querySelector("a");

    // Add an onclick handler.
    a.addEventListener("click", () => {
      // Hide all the tabs.
      hideAll(tabGroup, lis);

      // Add the 'active' class to the li element.
      li.classList.add("active");

      // Get all the divs with the same data-tag as the li element, and remove the 'hidden' class.
      tabGroup
        .querySelectorAll(`div[data-tab='${li.dataset.tab}']`)
        .forEach((el) => el.classList.remove("hidden"));
    });
  }

  // "Press" the first tab so there always is an active tab.
  lis[0].querySelector("a").click();
}

// Function to hide all the content, and deactivate all the tabs.
function hideAll(tabGroup, lis) {
  for (let li of lis) {
    // Remove the 'active' class from the li element so it doesn't have the black line.
    li.classList.remove("active");

    // Get all the divs with the same data-tag as the li element, and add the 'hidden' class.
    tabGroup
      .querySelectorAll(`div[data-tab='${li.dataset.tab}']`)
      .forEach((el) => el.classList.add("hidden"));
  }
}


/*Game API*/
/*Forside*/
const gA_f_resultsContainer = document.querySelector(".gA-f-results")
const gA_loader = document.querySelector(".gA-loader") /*for å lage en loader og velge den*/

const gA_f_url = "https://api.rawg.io/api/games?key=54582cd735a340b89b17702eae51578b"

async function fetchGames() {
    try {
        const response = await fetch(gA_f_url);
        const json = await response.json();
        console.log(json)   
        
        gA_f_resultsContainer.innerHTML = "";
        gA_loader.innerHTML = ""

        const games = json.results

        games.forEach(function (game) {
            gA_f_resultsContainer.innerHTML +=
            `<a href="gameDetails.html?id=${game.id}&title=${game.name}">
            <p>${game.name}</p>
            </a>`
        });
    } catch (error) {
        console.log(error);
        gA_f_resultsContainer.innerHTML = "error";
    }
}

fetchGames();

/*Detaljeside*/
const gA_d_detailContainer = document.querySelector(".gameDetails");

const gA_d_queryString = document.location.search;

const gA_d_params = new URLSearchParams(gA_d_queryString);

const gA_d_id = gA_d_params.get("id");

console.log(gA_d_id);

const gA_d_url = "https://api.rawg.io/api/games/" + gA_d_id + "?key=54582cd735a340b89b17702eae51578b"

async function fetchGame() {
    try {
        const response = await fetch(gA_d_url);
        const details = await response.json();

        console.log(details);

        gA_d_detailContainer.innerHTML = `
        <h1>${details.name}</h1>
        <div class="details-image" 
            style="
                background-image: url('${details.background_image}'); 
                height: 500px; 
                background-size: cover
            ">
        </div>
        ${details.description}
        `;
    } catch(error) {
        console.log(error)
    }
}
fetchGame();