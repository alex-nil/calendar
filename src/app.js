import {Fetch} from "../classes/fetch.js";

var testing = new Fetch();
 
let submit = document.getElementById("searchBtn");
submit.addEventListener("click", function searchMonth() {
    let myValue = document.getElementById("usrIn").value;
    testing.fetchLatest(myValue);
    var currentIn = myValue;
    console.log(myValue);
    console.log(currentIn);
    document.getElementById("usrIn").value = "";
});

var calendarDiv = document.getElementById("calendar");



