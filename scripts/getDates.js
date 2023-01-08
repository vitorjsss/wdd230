const todaysdate = new Date();
const year = todaysdate.getFullYear();

document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent = "Last Modification: " + todaysdate.getDay() + "/" + todaysdate.getMonth() + "/" + todaysdate.getFullYear() + 
"/" + todaysdate.getHours() + ":" + todaysdate.getMinutes() + ":" + todaysdate.getSeconds();