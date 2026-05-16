const body = document.body;
const toggleBtn = document.getElementById('toggle');

const countryElements = document.querySelectorAll(".country-item");

console.log("Checking elements on load:");
console.log("Body element:", body);
console.log("Toggle button element:", toggleBtn);



if (!toggleBtn) {
    console.error("Error: ToggleBtn is null! Script ran before Html button was formed")
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    console.log("LocalStorage 'theme' value:", savedTheme)
    if (savedTheme === 'dark') {
        body.classList.add('dark');
    }
}
function toggleTheme() {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

toggleBtn.addEventListener('click', toggleTheme);
loadTheme();

// mock data
const mockData = {"search_metadata":{
"id": "69ea846166bc78c0f86a5656"},
"search_parameters":{
    "engine":
"google_trends"},
"interest_by_region":
[
{ "location":"South Korea", "value":"100"}, 
{ "location": "India", "value": "92" },
{ "location": "Japan", "value": "78" },
{ "location": "Italy", "value": "74" },
{ "location": "Germany", "value": "68" },
{ "location": "United Kingdom", "value": "65" },
{ "location": "Canada", "value": "60" },
{ "location": "Brazil", "value": "58" },
{ "location": "Australia", "value": "55" },
{ "location": "France", "value": "52" },
{ "location": "Singapore"," value": "50" }
]
}


function printRanking () {
    mockData.interest_by_region.forEach((item, index) => {
        const rank = index + 1;
        const countryName = item.location;

        console.log(`#${rank} country is ${countryName}`)

        if (countryElements[index]) {
            countryElements[index].textContent = `#${rank} country is ${countryName}`;
        }
    });
    
};

function printRankingNumbered (i) {
    mockData.interest_by_region.forEach((item, index) => {
        const rank = index + 1;
        const countryName = item.location;

        if (index < i) {
            const output = `#${rank} country is ${countryName}`;

            console.log(output)

            if (countryElements[index]) {
                countryElements[index].textContent = output
            }
        }
});
}

printRanking();
printRankingNumbered(5)