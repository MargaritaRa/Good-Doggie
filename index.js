let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

// fetch("http://localhost:3000/countries")
// .then(response => response.json())
// .then(countries => {
//     const btnContainer = document.querySelector("#countries");
//     countries.forEach(country => {
//         const button = document.createElement("button");
//         button.textContent = country.name;
//         button.addEventListener("click", () => {displayCountriesDetails(country);});
//         btnContainer.appendChild(button);
//     });
//     displayCountriesDetails();
// });

fetch("http://localhost:3000/countries")
    .then(response => response.json())
    .then(countries => {
        const btnContainer = document.querySelector("#newButtons");
        countries.forEach(country => {
            const button = document.createElement("button");
            button.textContent = country.name;
            button.addEventListener("click", () => {
                displayCountriesDetails(country);
            });
            btnContainer.appendChild(button);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// add a class to the html and add that to the fetch.
//htne when us the class to edit something on css.

function displayCountriesDetails(country){
    document.querySelector("#countrieyName").textContent = country.name;
    document.querySelector("#countries-capital").textContent = country.capital;
    document.querySelector("#countries-language").textContent = country.language;
    document.querySelector("#countries-tipping").textContent = country.tipping;
    document.querySelector("#countries-hello").textContent = country.hello;
    document.querySelector("#countries-thankYou").textContent = country.thankYou;
    document.querySelector("#countries-passportVisa").textContent = country.passportVisa;
    document.querySelector("#countries-food").textContent = country.food;
}