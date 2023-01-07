const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const months = [
    
]

const options = {
    year: "long",
};

document.getElementById("currentYear").textContent = new Date().toLocaleDateString('en-US', options);